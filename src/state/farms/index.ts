/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import farmsConfig from 'constants/farms/farms'
import { FarmsState, Farm } from './types'

const initialState: FarmsState = { data: [...farmsConfig] }

export const farmsSlice = createSlice({
  name: 'Farms',
  initialState,
  reducers: {
    setFarmsPublicData: (state, action) => {
      const liveFarmsData: Farm[] = action.payload

      state.data = state.data.map(farm => {
        const liveFarmData = liveFarmsData.find(f => f.pid === farm.pid)
        return { ...farm, ...liveFarmData }
      })
    }
  }
})

// Actions
export const { setFarmsPublicData } = farmsSlice.actions
export default farmsSlice.reducer
