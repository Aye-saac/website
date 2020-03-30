import {
  disableCamera,
  disableMicrophone,
  disablePrivacy,
  enableCamera,
  enableMicrophone,
  enablePrivacy,
  permissionReducer,
} from "./permissionSlice"

const getInitialState = ({
  camera = false,
  microphone = false,
  privacy = false,
}) => {
  return {
    camera,
    microphone,
    privacy,
  }
}

describe("Features > permission > permissionSlice", () => {
  it(`enables camera when ${enableCamera.type} action is provided`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({ camera: true })

    const action = {
      type: enableCamera.type,
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })

  it(`disables camera when ${disableCamera.type} action is provided`, () => {
    const initialState = getInitialState({ camera: true })

    const expectedState = getInitialState({ camera: false })

    const action = {
      type: disableCamera.type,
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })

  it(`enables microphone when ${enableMicrophone.type} action is provided`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({ microphone: true })

    const action = {
      type: enableMicrophone.type,
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })
  it(`disables microphone when ${disableMicrophone.type} action is provided`, () => {
    const initialState = getInitialState({ microphone: true })

    const expectedState = getInitialState({ microphone: false })

    const action = {
      type: disableMicrophone.type,
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })
  it(`enables privacy when ${enablePrivacy.type} action is provided`, () => {
    const initialState = getInitialState({})

    const expectedState = getInitialState({ privacy: true })

    const action = {
      type: enablePrivacy.type,
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })
  it(`disables privacy when ${disablePrivacy.type} action is provided`, () => {
    const initialState = getInitialState({ privacy: true })

    const expectedState = getInitialState({ privacy: false })

    const action = {
      type: disablePrivacy.type,
    }

    expect(permissionReducer(initialState, action)).toEqual(expectedState)
  })
})
