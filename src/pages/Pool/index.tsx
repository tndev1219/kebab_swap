import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Pair } from '@pancakeswap-libs/sdk'
import { Button, CardBody, Text } from 'kebabfinance-uikit'
import { Link } from 'react-router-dom'
import CardNav from 'components/CardNav'
import Question from 'components/QuestionHelper'
import FullPositionCard from 'components/PositionCard'
import { useUserHasLiquidityInAllTokens } from 'data/V1'
import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
import { StyledInternalLink, TYPE } from 'components/Shared'
import { RowBetween } from 'components/Row'
import { AutoColumn } from 'components/Column'

import { useActiveWeb3React } from 'hooks'
import { usePairs } from 'data/Reserves'
import { toV2LiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
import AppBody from '../AppBody'
import { Dots } from 'components/swap/styleds'
import TranslatedText from 'components/TranslatedText'
import { TranslateString } from 'utils/translateTextHelpers'
import PageHeader from 'components/PageHeader'

const StyledCardBody = styled(CardBody)`
  padding: 32px 31px 38px 31px;
`
const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
`
const LiquidityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`

export default function Pool() {
  const theme = useContext(ThemeContext)
  const { account } = useActiveWeb3React()

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map(tokens => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs]
  )
  const liquidityTokens = useMemo(() => tokenPairsWithLiquidityTokens.map(tpwlt => tpwlt.liquidityToken), [
    tokenPairsWithLiquidityTokens
  ])
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  )

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some(V2Pair => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  const hasV1Liquidity = useUserHasLiquidityInAllTokens()

  return (
    <>
      <CardNav activeIndex={1} />
      <AppBody>
        <PageHeader title="Liquidity" description="Add liquidity to receive LP tokens">
          <Button id="join-pool-button" as={Link} to="/add/ETH" style={{ marginBottom: 16, width: 195 }}>
            <TranslatedText translationId={100}>Add Liquidity</TranslatedText>
          </Button>
        </PageHeader>
        <AutoColumn gap="lg" justify="center">
          <StyledCardBody>
            <AutoColumn gap="12px">
              <RowBetween padding={'0 30px'}>
                <StyledText color={theme.colors.text} bold fontSize="14px">
                  <TranslatedText translationId={102}>Your Liquidity</TranslatedText>
                </StyledText>
                <Question
                  text={TranslateString(
                    130,
                    'When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below.'
                  )}
                />
              </RowBetween>

              {!account ? (
                <LiquidityWrapper>
                  <TYPE.body color={theme.colors.textInactive} bold>
                    Connect to a wallet to view your liquidity.
                  </TYPE.body>
                </LiquidityWrapper>
              ) : v2IsLoading ? (
                <LiquidityWrapper>
                  <TYPE.body color={theme.colors.textInactive} bold>
                    <Dots>Loading</Dots>
                  </TYPE.body>
                </LiquidityWrapper>
              ) : allV2PairsWithLiquidity?.length > 0 ? (
                <>
                  {allV2PairsWithLiquidity.map(v2Pair => (
                    <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
                  ))}
                </>
              ) : (
                <LiquidityWrapper>
                  <TYPE.body color={theme.colors.textInactive} bold>
                    <TranslatedText translationId={104}>No liquidity found.</TranslatedText>
                  </TYPE.body>
                </LiquidityWrapper>
              )}

              <div>
                <Text fontSize="14px" bold style={{ padding: '.5rem 0' }}>
                  {hasV1Liquidity
                    ? 'Uniswap V1 liquidity found!'
                    : TranslateString(106, "Don't see a pool you joined?")}{' '}
                  <StyledInternalLink id="import-pool-link" to={hasV1Liquidity ? '/migrate/v1' : '/find'}>
                    {hasV1Liquidity ? 'Migrate now.' : TranslateString(108, 'Import it.')}
                  </StyledInternalLink>
                </Text>
                <Text fontSize="14px" bold style={{ padding: '.5rem 0 0 0' }}>
                  Or, if you staked your LP tokens in a farm, unstake them to see them here.
                </Text>
              </div>
            </AutoColumn>
          </StyledCardBody>
        </AutoColumn>
      </AppBody>
    </>
  )
}
