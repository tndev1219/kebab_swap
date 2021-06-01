import { useEffect, useState } from 'react'
import { TokenList } from '@uniswap/token-lists'
import DEFAULT_LIST from 'constants/token/pancakeswap.json'
import { GET_TOKENS_LIST_URL } from '../constants'
/**
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */

const useGetTokenList = () => {
  const [data, setData] = useState<TokenList>(DEFAULT_LIST)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GET_TOKENS_LIST_URL)
        const data: TokenList = await response.json()

        setData(data)
      } catch (error) {
        console.error('Unable to fetch token list:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export default useGetTokenList
