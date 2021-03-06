import BigNumber from 'bignumber.js'
import erc20 from 'constants/abis/erc20.json'
import masterchefABI from 'constants/abis/masterchef.json'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import getFarmsList from 'utils/getFarmsList'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID as string

const fetchFarms = async () => {
  const farmsConfig = await getFarmsList()
  const data = await Promise.all(
    farmsConfig.map(async farmConfig => {
      const lpAdress = (farmConfig.lpAddresses as any)[CHAIN_ID]
      const calls = [
        // Balance of token in the LP contract
        {
          address: (farmConfig.tokenAddresses as any)[CHAIN_ID],
          name: 'balanceOf',
          params: [lpAdress]
        },
        // Balance of quote token on LP contract
        {
          address: (farmConfig.quoteTokenAdresses as any)[CHAIN_ID],
          name: 'balanceOf',
          params: [lpAdress]
        },
        // Balance of LP tokens in the master chef contract
        {
          address: lpAdress,
          name: 'balanceOf',
          params: [getMasterChefAddress()]
        },
        // Total supply of LP tokens
        {
          address: lpAdress,
          name: 'totalSupply'
        },
        // Token decimals
        {
          address: (farmConfig.tokenAddresses as any)[CHAIN_ID],
          name: 'decimals'
        },
        // Quote token decimals
        {
          address: (farmConfig.quoteTokenAdresses as any)[CHAIN_ID],
          name: 'decimals'
        }
      ]

      const [
        tokenBalanceLP,
        quoteTokenBlanceLP,
        lpTokenBalanceMC,
        lpTotalSupply,
        tokenDecimals,
        quoteTokenDecimals
      ] = await multicall(erc20, calls)

      // Ratio in % a LP tokens that are in staking, vs the total number in circulation
      const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

      // Total value in staking in quote token value
      const lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
        .div(new BigNumber(10).pow(18))
        .times(new BigNumber(2))
        .times(lpTokenRatio)

      // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
      const tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
      const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
        .div(new BigNumber(10).pow(quoteTokenDecimals))
        .times(lpTokenRatio)

      const [info, totalAllocPoint] = await multicall(masterchefABI, [
        {
          address: getMasterChefAddress(),
          name: 'poolInfo',
          params: [farmConfig.pid]
        },
        {
          address: getMasterChefAddress(),
          name: 'totalAllocPoint'
        }
      ])

      const poolWeight = new BigNumber(info.allocPoint._hex).div(new BigNumber(totalAllocPoint))
      return {
        ...farmConfig,
        tokenAmount: tokenAmount.toJSON(),
        quoteTokenAmount: quoteTokenAmount.toJSON(),
        lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
        tokenPriceVsQuote: quoteTokenAmount.div(tokenAmount).toJSON(),
        poolWeight: poolWeight.toJSON(),
        lpSupply: new BigNumber(lpTotalSupply).toJSON()
      }
    })
  )
  return data
}

export default fetchFarms
