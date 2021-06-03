export enum QuoteToken {
  'BNB' = 'BNB',
  'KEBAB' = 'KEBAB',
  'KETCH' = 'KETCH',
  'BUSD' = 'BUSD',
  'TWT' = 'TWT',
  'BTCB' = 'BTCB'
}

export interface Address {
  97?: string
  56: string
}

export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  tokenSymbol: string
  tokenAddresses: Address
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
  multiplier?: string
  risk?: number // 1 to 10
  isCommunity?: boolean
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
}
