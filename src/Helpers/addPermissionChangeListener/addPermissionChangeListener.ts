import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

import { store } from "Store"

interface AddPermissionChangeListener {
  name: PermissionName
  dispatch: typeof store.dispatch
  action: ActionCreatorWithPayload<PermissionState, string>
}

const addPermissionChangeListener = ({
  name,
  dispatch,
  action,
}: AddPermissionChangeListener): void => {
  navigator.permissions.query({ name }).then((status) => {
    // Update the store with the permission status
    dispatch(action(status.state))

    // On change, update the store with the new permission
    status.addEventListener("change", (event) => {
      const updatedStatus = event.target as PermissionStatus

      dispatch(action(updatedStatus.state))
    })
  })
}

export default addPermissionChangeListener
