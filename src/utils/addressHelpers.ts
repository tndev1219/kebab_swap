import addresses from '../constants/farms/contracts'

// const chainId = process.env.REACT_APP_CHAIN_ID
const chainId = 56

export const getMasterChefAddress = () => {
  return addresses.masterChef[chainId]
}

export const getMulticallAddress = () => {
  return addresses.mulltiCall[chainId]
}
