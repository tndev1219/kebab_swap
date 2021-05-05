import { MenuEntry } from 'kebabfinance-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://kebabfinance.com'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farming',
    icon: 'FarmIcon',
    href: 'https://kebabfinance.com/#/farms'
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: 'https://kebabfinance.com/#/syrup'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.kebabfinance.com'
      },
      {
        label: 'Tokens',
        href: 'https://info.kebabfinance.com/#/tokens'
      },
      {
        label: 'Pairs',
        href: 'https://info.kebabfinance.com/#/pairs'
      },
      {
        label: 'Accounts',
        href: 'https://info.kebabfinance.com/#/accounts'
      }
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Governance',
        href: 'https://gov.kebabfinance.com'
      },
      {
        label: 'Github',
        href: 'https://github.com/chefkebab'
      },
      {
        label: 'Blog',
        href: 'https://kebabfinance1.medium.com'
      }
    ]
  }
]

export default config
