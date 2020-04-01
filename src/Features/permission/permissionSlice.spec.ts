import {
  permissionReducer,
  PermissionReducerState,
  updateCamera,
  updateMicrophone,
  updatePrivacy,
} from "./permissionSlice"

const getInitialState = ({
  camera,
  microphone,
  privacy,
}: Partial<PermissionReducerState>): PermissionReducerState => {
  return {
    camera: camera || "prompt",
    microphone: microphone || "prompt",
    privacy: privacy || "prompt",
  }
}

describe("Features > permission > permissionSlice", () => {
  it(`grants camera with ${updateCamera.type} action`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({ camera: "granted" })

    const action = {
      type: updateCamera.type,
      payload: "granted",
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })

  it(`denies camera with ${updateCamera.type} action`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({ camera: "denied" })

    const action = {
      type: updateCamera.type,
      payload: "denied",
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })

  it(`grants microphone with ${updateMicrophone.type} action`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({ microphone: "granted" })

    const action = {
      type: updateMicrophone.type,
      payload: "granted",
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })

  it(`denies microphone with ${updateMicrophone.type} action`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({ microphone: "denied" })

    const action = {
      type: updateMicrophone.type,
      payload: "denied",
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })

  it(`grants privacy with ${updatePrivacy.type} action`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({ privacy: "granted" })

    const action = {
      type: updatePrivacy.type,
      payload: "granted",
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })

  it(`denies privacy with ${updatePrivacy.type} action`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({ privacy: "denied" })

    const action = {
      type: updatePrivacy.type,
      payload: "denied",
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })
})
