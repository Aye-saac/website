import {
  permissionReducer,
  PermissionReducerState,
  updateCameraStatus,
  updateMicrophoneStatus,
  updatePrivacyStatus,
} from "./permissionSlice"

const getInitialState = ({
  camera,
  microphone,
  privacy,
}: Partial<PermissionReducerState>): PermissionReducerState => {
  return {
    camera: camera || { isAvailable: true, status: "prompt" },
    microphone: microphone || { isAvailable: true, status: "prompt" },
    privacy: privacy || { isAvailable: true, status: "prompt" },
  }
}

describe("Features > permission > permissionSlice", () => {
  it(`grants camera with ${updateCameraStatus.type} action`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({
      camera: { isAvailable: true, status: "granted" },
    })

    const action = {
      type: updateCameraStatus.type,
      payload: "granted",
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })

  it(`denies camera with ${updateCameraStatus.type} action`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({
      camera: { isAvailable: true, status: "denied" },
    })

    const action = {
      type: updateCameraStatus.type,
      payload: "denied",
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })

  it(`grants microphone with ${updateMicrophoneStatus.type} action`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({
      microphone: { isAvailable: true, status: "granted" },
    })

    const action = {
      type: updateMicrophoneStatus.type,
      payload: "granted",
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })

  it(`denies microphone with ${updateMicrophoneStatus.type} action`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({
      microphone: { isAvailable: true, status: "denied" },
    })

    const action = {
      type: updateMicrophoneStatus.type,
      payload: "denied",
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })

  it(`grants privacy with ${updatePrivacyStatus.type} action`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({
      privacy: { isAvailable: true, status: "granted" },
    })

    const action = {
      type: updatePrivacyStatus.type,
      payload: "granted",
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })

  it(`denies privacy with ${updatePrivacyStatus.type} action`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({
      privacy: { isAvailable: true, status: "denied" },
    })

    const action = {
      type: updatePrivacyStatus.type,
      payload: "denied",
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })
})
