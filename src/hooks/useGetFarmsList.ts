import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FarmConfig } from 'constants/types'
import { GET_FARMS_LIST_URL } from '../constants'
import { setFarmsPublicData } from '../state/farms'

export const useGetFarmsList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GET_FARMS_LIST_URL)
        const farms: FarmConfig[] = await response.json()

        dispatch(setFarmsPublicData(farms))
      } catch (error) {
        console.error('Unable to fetch farms list:', error)
      }
    }

    fetchData()
  }, [dispatch])
}
