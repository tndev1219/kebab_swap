import React from 'react'
import styled from 'styled-components'
import { Trade, TradeType } from '@pancakeswap-libs/sdk'
import { Card, CardBody, Text } from 'kebabfinance-uikit'
import { Field } from '../../state/swap/actions'
import { useUserSlippageTolerance } from '../../state/user/hooks'
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown } from '../../utils/prices'
import { AutoColumn } from '../Column'
import QuestionHelper from '../QuestionHelper'
import { RowBetween, RowFixed } from '../Row'
import { SectionBreak } from './styleds'
import SwapRoute from './SwapRoute'
import { ONE_BIPS } from '../../constants'

const StyledCardBody = styled(CardBody)`
  padding: 16px 31px;
`
const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
`
const PercentValue = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
`

function TradeSummary({ trade, allowedSlippage }: { trade: Trade; allowedSlippage: number }) {
  const { priceImpactWithoutFee, realizedLPFee } = computeTradePriceBreakdown(trade)
  const isExactIn = trade.tradeType === TradeType.EXACT_INPUT
  const slippageAdjustedAmounts = computeSlippageAdjustedAmounts(trade, allowedSlippage)

  return (
    <Card>
      <StyledCardBody>
        <RowBetween style={{ marginBottom: 4 }}>
          <RowFixed>
            <StyledText fontSize="16px" bold>
              {isExactIn ? 'Minimum received' : 'Maximum sold'}
            </StyledText>
            <QuestionHelper text="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed." />
          </RowFixed>
          <RowFixed>
            <StyledText fontSize="16px" bold>
              {isExactIn
                ? `${slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)} ${trade.outputAmount.currency.symbol}` ??
                  '-'
                : `${slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4)} ${trade.inputAmount.currency.symbol}` ??
                  '-'}
            </StyledText>
          </RowFixed>
        </RowBetween>
        <RowBetween style={{ marginBottom: 4 }}>
          <RowFixed>
            <StyledText fontSize="16px" bold>
              Price Impact
            </StyledText>
            <QuestionHelper text="The difference between the market price and estimated price due to trade size." />
          </RowFixed>
          <PercentValue fontSize="16px" color="primary" bold>
            {priceImpactWithoutFee
              ? priceImpactWithoutFee.lessThan(ONE_BIPS)
                ? '<0.01%'
                : `${priceImpactWithoutFee.toFixed(2)}%`
              : '-'}
          </PercentValue>
        </RowBetween>

        <RowBetween>
          <RowFixed>
            <StyledText fontSize="16px" bold>
              Liquidity Provider Fee
            </StyledText>
            <QuestionHelper text="For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury." />
          </RowFixed>
          <StyledText fontSize="16px" bold>
            {realizedLPFee ? `${realizedLPFee.toSignificant(4)} ${trade.inputAmount.currency.symbol}` : '-'}
          </StyledText>
        </RowBetween>
      </StyledCardBody>
    </Card>
  )
}

export interface AdvancedSwapDetailsProps {
  trade?: Trade
}

export function AdvancedSwapDetails({ trade }: AdvancedSwapDetailsProps) {
  const [allowedSlippage] = useUserSlippageTolerance()

  const showRoute = Boolean(trade && trade.route.path.length > 2)

  return (
    <AutoColumn gap="md">
      {trade && (
        <>
          <TradeSummary trade={trade} allowedSlippage={allowedSlippage} />
          {showRoute && (
            <>
              <SectionBreak />
              <AutoColumn style={{ padding: '0 24px' }}>
                <RowFixed>
                  <Text fontSize="14px">Route</Text>
                  <QuestionHelper text="Routing through these tokens resulted in the best price for your trade." />
                </RowFixed>
                <SwapRoute trade={trade} />
              </AutoColumn>
            </>
          )}
        </>
      )}
    </AutoColumn>
  )
}
