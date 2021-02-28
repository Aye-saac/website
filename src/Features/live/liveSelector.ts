import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "Store"
import { LiveState } from "Typings"

export const selectLiveState = (state: RootState): LiveState => state.live
export const selectSpeechDetectionText = createSelector(
  selectLiveState,
  (state): string => state.speechDetection,
)
export const selectLiveSpeechDetectionError = createSelector(
  selectLiveState,
  (state): string | undefined => state.error,
)
