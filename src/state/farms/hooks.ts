import BigNumber from 'bignumber.js'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRefresh from 'hooks/useRefresh'
import { AppState } from '../index'
import { Farm } from './types'
import { setFarmsPublicData } from './index'
import fetchFarms from './fetchFarms'

const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchFarmsPublicDataAsync = async () => {
      const farms = await fetchFarms()

      dispatch(setFarmsPublicData(farms))
    }

    fetchFarmsPublicDataAsync()
  }, [dispatch, slowRefresh])
}

export const useFarmFromPid = (pid: number) => {
  const farm = useSelector(
    (state: AppState) => state.farms.data.find((f: Farm) => f.pid === pid) ?? state.farms.data[0]
  )
  return farm
}

export const usePriceCakeBusd = (): BigNumber => {
  const pid = 1 // KEBAB-BUSD LP
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}
