import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "Store"
import { NavigationState, Page } from "Typings"

const initialState: NavigationState = {
  current: 0,
}

export const slice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.current += 1
    },
    prevPage: (state) => {
      state.current = state.current === 0 ? 0 : state.current - 1
    },
    gotoPage: (state, action: PayloadAction<Page>) => {
      state.current = action.payload
    },
  },
})

export const { nextPage, prevPage, gotoPage } = slice.actions

export const selectNavigation = (state: RootState) => state.navigation
export const selectCurrent = (state: RootState) => state.navigation.current

export const navigationReducer = slice.reducer

export default navigationReducer
