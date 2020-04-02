import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

import { store } from "Store"

import verifyDeviceAvailability from "../verifyDeviceAvailability"

interface AddPermissionChangeListener {
  name: PermissionName
  dispatch: typeof store.dispatch
  statusAction: ActionCreatorWithPayload<PermissionState, string>
  availabilityAction: ActionCreatorWithPayload<boolean, string>
}

const addPermissionChangeListener = ({
  name,
  dispatch,
  statusAction,
  availabilityAction,
}: AddPermissionChangeListener): void => {
  // Determine if device is available
  const isDeviceAvailable = verifyDeviceAvailability(name)

  // Update availability for that device
  dispatch(availabilityAction(isDeviceAvailable))

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
