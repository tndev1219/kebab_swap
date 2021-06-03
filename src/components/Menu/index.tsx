import React, { useContext } from 'react'
import { Menu as UikitMenu, ConnectorId } from 'kebabfinance-uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import { injected, bsc, walletconnect } from 'connectors'
import { usePriceCakeBusd } from 'state/farms/hooks'
import links from './config'

const Menu: React.FC = props => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  if (!sessionStorage.lastprice) sessionStorage.lastprice = cakePriceUsd.toNumber().toString()
  if (sessionStorage.lastprice !== cakePriceUsd.toNumber().toString()) {
    setTimeout(() => {
      sessionStorage.lastprice = cakePriceUsd.toNumber().toString()
    }, 1500)
  }

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        if (connectorId === 'bsc') {
          return activate(bsc)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd.toNumber()}
      priceUp={Number(sessionStorage.lastprice) < cakePriceUsd.toNumber()}
      {...props}
    />
  )
}

export default Menu
