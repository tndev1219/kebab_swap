import farmsConfig from 'constants/farms/farms'
import { FarmConfig } from 'constants/types'
import { GET_FARMS_LIST_URL } from '../constants'

const getFarmsList = async () => {
  let data: FarmConfig[] = farmsConfig
  try {
    const response = await fetch(GET_FARMS_LIST_URL)
    data = await response.json()

    return data
  } catch (error) {
    console.error('Unable to fetch farms list:', error)
    return data
  }
}

export default getFarmsList
