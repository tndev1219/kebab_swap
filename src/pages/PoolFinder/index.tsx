import React, { useCallback, useEffect, useState, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Currency, ETHER, JSBI, TokenAmount } from '@pancakeswap-libs/sdk'
import { Button, ChevronDownIcon, AddIcon, CardBody, Text } from 'kebabfinance-uikit'
import CardNav from 'components/CardNav'
import { AutoColumn, ColumnCenter } from 'components/Column'
import CurrencyLogo from 'components/CurrencyLogo'
import { FindPoolTabs } from 'components/NavigationTabs'
import { MinimalPositionCard } from 'components/PositionCard'
import CurrencySearchModal from 'components/SearchModal/CurrencySearchModal'
import { PairState, usePair } from 'data/Reserves'
import { useActiveWeb3React } from 'hooks'
import { usePairAdder } from 'state/user/hooks'
import { useTokenBalance } from 'state/wallet/hooks'
import { StyledInternalLink } from 'components/Shared'
import { currencyId } from 'utils/currencyId'
import AppBody from '../AppBody'
import { Dots } from '../Pool/styleds'
import TranslatedText from 'components/TranslatedText'

enum Fields {
  TOKEN0 = 0,
  TOKEN1 = 1
}

const StyledCardBody = styled(CardBody)`
  padding: 32px 31px 38px 31px;
`
const LiquidityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`

export default function PoolFinder() {
  const theme = useContext(ThemeContext)
  const { account } = useActiveWeb3React()

  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [activeField, setActiveField] = useState<number>(Fields.TOKEN1)

  const [currency0, setCurrency0] = useState<Currency | null>(ETHER)
  const [currency1, setCurrency1] = useState<Currency | null>(null)

  const [pairState, pair] = usePair(currency0 ?? undefined, currency1 ?? undefined)
  const addPair = usePairAdder()
  useEffect(() => {
    if (pair) {
      addPair(pair)
    }
  }, [pair, addPair])

  const validPairNoLiquidity: boolean =
    pairState === PairState.NOT_EXISTS ||
    Boolean(
      pairState === PairState.EXISTS &&
        pair &&
        JSBI.equal(pair.reserve0.raw, JSBI.BigInt(0)) &&
        JSBI.equal(pair.reserve1.raw, JSBI.BigInt(0))
    )

  const position: TokenAmount | undefined = useTokenBalance(account ?? undefined, pair?.liquidityToken)
  const hasPosition = Boolean(position && JSBI.greaterThan(position.raw, JSBI.BigInt(0)))

  const handleCurrencySelect = useCallback(
    (currency: Currency) => {
      if (activeField === Fields.TOKEN0) {
        setCurrency0(currency)
      } else {
        setCurrency1(currency)
      }
    },
    [activeField]
  )

  const handleSearchDismiss = useCallback(() => {
    setShowSearch(false)
  }, [setShowSearch])

  const prerequisiteMessage = (
    <LiquidityWrapper>
      <Text color={theme.colors.textInactive} bold>
        {!account ? 'Connect to a wallet to find pools' : 'Select a token to find your liquidity.'}
      </Text>
    </LiquidityWrapper>
  )

  return (
    <>
      <CardNav activeIndex={1} />
      <AppBody>
        <FindPoolTabs />
        <StyledCardBody>
          <AutoColumn gap="16px">
            <Button
              onClick={() => {
                setShowSearch(true)
                setActiveField(Fields.TOKEN0)
              }}
              startIcon={currency0 ? <CurrencyLogo currency={currency0} style={{ marginRight: '.5rem' }} /> : null}
              endIcon={<ChevronDownIcon width="24px" color="white" />}
              fullWidth
            >
              {currency0 ? currency0.symbol : <TranslatedText translationId={82}>Select a Token</TranslatedText>}
            </Button>

            <ColumnCenter>
              <AddIcon color="primary" />
            </ColumnCenter>

            <Button
              onClick={() => {
                setShowSearch(true)
                setActiveField(Fields.TOKEN1)
              }}
              startIcon={currency1 ? <CurrencyLogo currency={currency1} style={{ marginRight: '.5rem' }} /> : null}
              endIcon={<ChevronDownIcon width="24px" color="white" />}
              fullWidth
            >
              {currency1 ? currency1.symbol : <TranslatedText translationId={82}>Select a Token</TranslatedText>}
            </Button>

            {hasPosition && (
              <ColumnCenter
                style={{ justifyItems: 'center', backgroundColor: '', padding: '12px 0px', borderRadius: '12px' }}
              >
                <Text style={{ textAlign: 'center' }}>Pool Found!</Text>
              </ColumnCenter>
            )}

            {currency0 && currency1 ? (
              pairState === PairState.EXISTS ? (
                hasPosition && pair ? (
                  <MinimalPositionCard pair={pair} />
                ) : (
                  <LiquidityWrapper>
                    <AutoColumn gap="sm" justify="center">
                      <Text color={theme.colors.textInactive} bold>
                        You don’t have liquidity in this pool yet.
                      </Text>
                      <StyledInternalLink to={`/add/${currencyId(currency0)}/${currencyId(currency1)}`}>
                        <Text color={theme.colors.primary} bold style={{ marginTop: -5 }}>
                          <TranslatedText translationId={100}>Add Liquidity</TranslatedText>
                        </Text>
                      </StyledInternalLink>
                    </AutoColumn>
                  </LiquidityWrapper>
                )
              ) : validPairNoLiquidity ? (
                <LiquidityWrapper>
                  <AutoColumn gap="sm" justify="center">
                    <Text color={theme.colors.textInactive} bold>
                      No pool found.
                    </Text>
                    <StyledInternalLink to={`/add/${currencyId(currency0)}/${currencyId(currency1)}`}>
                      <Text color={theme.colors.primary} bold style={{ marginTop: -5 }}>
                        Create pool.
                      </Text>
                    </StyledInternalLink>
                  </AutoColumn>
                </LiquidityWrapper>
              ) : pairState === PairState.INVALID ? (
                <LiquidityWrapper>
                  <AutoColumn gap="sm" justify="center">
                    <Text color={theme.colors.textInactive} bold>
                      <TranslatedText translationId={136}>Invalid pair.</TranslatedText>
                    </Text>
                  </AutoColumn>
                </LiquidityWrapper>
              ) : pairState === PairState.LOADING ? (
                <LiquidityWrapper>
                  <AutoColumn gap="sm" justify="center">
                    <Text color={theme.colors.textInactive} bold>
                      Loading
                      <Dots />
                    </Text>
                  </AutoColumn>
                </LiquidityWrapper>
              ) : null
            ) : (
              prerequisiteMessage
            )}
          </AutoColumn>

          <CurrencySearchModal
            isOpen={showSearch}
            onCurrencySelect={handleCurrencySelect}
            onDismiss={handleSearchDismiss}
            showCommonBases
            selectedCurrency={(activeField === Fields.TOKEN0 ? currency1 : currency0) ?? undefined}
          />
        </StyledCardBody>
      </AppBody>
    </>
  )
}
