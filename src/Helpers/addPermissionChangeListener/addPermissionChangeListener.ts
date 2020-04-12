import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

import { store } from "Store"

interface AddPermissionChangeListener {
  name: PermissionName
  dispatch: typeof store.dispatch
  statusAction: ActionCreatorWithPayload<PermissionState, string>
}

const addPermissionChangeListener = ({
  name,
  dispatch,
  statusAction,
}: AddPermissionChangeListener): void => {
  navigator.permissions.query({ name }).then((status) => {
    // Update the store with the permission status
    dispatch(statusAction(status.state))

    // On change, update the store with the new permission
    status.addEventListener("change", (event) => {
      const updatedStatus = event.target as PermissionStatus

      dispatch(statusAction(updatedStatus.state))
    })
  })
}

export default addPermissionChangeListener
