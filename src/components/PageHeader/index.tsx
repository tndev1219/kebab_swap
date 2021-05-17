import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, Text, Flex, useModal, SettingIcon, HistoryIcon } from 'kebabfinance-uikit'
import SettingsModal from './SettingsModal'
import RecentTransactionsModal from './RecentTransactionsModal'

interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

const StyledPageHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 38px 31px 0px 31px;
`
const Details = styled.div`
  flex: 1;
`
const StyledHeading = styled(Heading)`
  font-size: 28px;
  font-weight: 700;
`
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HeaderActionWrapper = styled.div``
const StyledText = styled(Text)`
  font-family: GilroySemiBold;
  line-height: unset;
`

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  const [onPresentSettings] = useModal(<SettingsModal />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal />)

  return (
    <StyledPageHeader>
      <Flex alignItems="center">
        <Details>
          <StyledHeading>{title}</StyledHeading>
          <HeaderWrapper>
            {description && (
              <StyledText color="primary" fontSize="16px">
                {description}
              </StyledText>
            )}
            <HeaderActionWrapper>
              <IconButton variant="text" onClick={onPresentSettings} title="Settings">
                <SettingIcon color="primary" />
              </IconButton>
              <IconButton variant="text" onClick={onPresentRecentTransactions} title="Recent transactions">
                <HistoryIcon color="primary" />
              </IconButton>
            </HeaderActionWrapper>
          </HeaderWrapper>
        </Details>
      </Flex>
      {children && <Text mt="16px">{children}</Text>}
    </StyledPageHeader>
  )
}

export default PageHeader
