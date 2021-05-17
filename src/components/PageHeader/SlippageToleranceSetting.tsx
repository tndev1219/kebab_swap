import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Flex, Input, Text } from 'kebabfinance-uikit'
import { useUserSlippageTolerance } from 'state/user/hooks'
import QuestionHelper from '../QuestionHelper'
import TranslatedText from '../TranslatedText'

const MAX_SLIPPAGE = 5000
const RISKY_SLIPPAGE_LOW = 50
const RISKY_SLIPPAGE_HIGH = 500

const StyledSlippageToleranceSettings = styled.div`
  margin-bottom: 16px;
`
const Label = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 16px;
`
const Option = styled.div`
  padding: 0 8px;
`
const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${Option}:first-child {
    padding-left: 0;
  }

  ${Option}:last-child {
    padding-right: 0;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`
const StyledButton = styled(Button)`
  font-size: 14px;
  border-radius: 6px;
  width: 53px;
`
const StyledText = styled(Text)`
  font-weight: 600;
`
const StyledInput = styled(Input)<{ isWarning?: boolean }>`
  height: 36px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.currencySelectBackground};
  color: ${({ theme }) => theme.colors.footer};
  font-weight: 600;
  border: ${({ isWarning }) => (!isWarning ? 'none' : '1px solid #E46149')};
  box-shadow: none !important;

  ::placeholder {
    color: ${({ theme }) => theme.colors.footer};
  }

  :focus {
    box-shadow: none !important;
  }
`

const predefinedValues = [
  { label: '0.1%', value: 0.1 },
  { label: '0.5%', value: 0.5 },
  { label: '1%', value: 1 }
]

const SlippageToleranceSettings = () => {
  const [userSlippageTolerance, setUserslippageTolerance] = useUserSlippageTolerance()
  const [value, setValue] = useState(userSlippageTolerance / 100)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = evt.target
    setValue(parseFloat(inputValue))
  }

  // Updates local storage if value is valid
  useEffect(() => {
    try {
      const rawValue = value * 100
      if (!Number.isNaN(rawValue) && rawValue > 0 && rawValue < MAX_SLIPPAGE) {
        setUserslippageTolerance(rawValue)
        setError(null)
      } else {
        setError('Enter a valid slippage percentage')
      }
    } catch {
      setError('Enter a valid slippage percentage')
    }
  }, [value, setError, setUserslippageTolerance])

  // Notify user if slippage is risky
  useEffect(() => {
    if (userSlippageTolerance < RISKY_SLIPPAGE_LOW) {
      setError('Your transaction may fail')
    } else if (userSlippageTolerance > RISKY_SLIPPAGE_HIGH) {
      setError('Your transaction may be frontrun')
    }
  }, [userSlippageTolerance, setError])

  return (
    <StyledSlippageToleranceSettings>
      <Label>
        <StyledText>
          <TranslatedText translationId={88}>Slippage tolerance</TranslatedText>
        </StyledText>
        <QuestionHelper text="Your transaction will revert if the price changes unfavorably by more than this percentage." />
      </Label>
      <Options>
        <Flex mb={['16px', 0]} mr={[0, '16px']}>
          {predefinedValues.map(({ label, value: predefinedValue }) => {
            const handleClick = () => setValue(predefinedValue)

            return (
              <Option key={predefinedValue}>
                <StyledButton
                  variant={value === predefinedValue ? 'primary' : 'switch'}
                  size="sm"
                  onClick={handleClick}
                >
                  {label}
                </StyledButton>
              </Option>
            )
          })}
        </Flex>
        <Flex alignItems="center">
          <Option>
            <StyledInput
              type="number"
              scale="md"
              step={0.1}
              min={0.1}
              placeholder="0.1"
              value={value}
              onChange={handleChange}
              isWarning={error !== null}
            />
          </Option>
          <StyledText fontSize="14px">%</StyledText>
        </Flex>
      </Options>
      {error && (
        <Text mt="8px" color="failure">
          {error}
        </Text>
      )}
    </StyledSlippageToleranceSettings>
  )
}

export default SlippageToleranceSettings
