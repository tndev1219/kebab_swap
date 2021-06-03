import DEFAULT_LIST from 'constants/token/pancakeswap.json'
import { GET_TOKENS_LIST_URL } from '../constants'

const fetchTokensList = async () => {
  let data = DEFAULT_LIST
  try {
    const response = await fetch(GET_TOKENS_LIST_URL)
    data = await response.json()
    return data
  } catch (error) {
    console.error('Unable to fetch farms list:', error)
    return data
  }
}

export default fetchTokensList
