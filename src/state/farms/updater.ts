import { useGetFarmsList } from '../../hooks/useGetFarmsList'
import { useFetchPublicData } from './hooks'

export default function Updater(): null {
  useGetFarmsList()
  useFetchPublicData()

  return null
}
