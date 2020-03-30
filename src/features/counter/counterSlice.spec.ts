import { counterReducer, decrement, increment } from "./counterSlice"

describe("features > counter > counterSlice", () => {
  it(`increments value, if ${increment.type} action is provided`, () => {
    const initialState = {
      value: 0,
    }

    const expectedState = {
      value: 1,
    }

    const action = {
      type: increment.type,
    }

    expect(counterReducer(initialState, action)).toEqual(expectedState)
  })

  it(`decrements value, if ${decrement.type} action is provided`, () => {
    const initialState = {
      value: 0,
    }

    const expectedState = {
      value: -1,
    }

    const action = {
      type: decrement.type,
    }

    expect(counterReducer(initialState, action)).toEqual(expectedState)
  })
})
