import { createSlice } from "@reduxjs/toolkit"

import { RootState } from "Store"

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = slice.actions

export const selectCount = (state: RootState) => state.counter.value

export const counterReducer = slice.reducer

export default counterReducer
