export type DevicePermission = {
  status: PermissionState
  mobileOnly: boolean
}

export type DeviceType = "camera" | "microphone"

export type PermissionReducerState = Record<DeviceType, DevicePermission>

export interface DialogueFile {
  url: string
}

export interface DialogueMessageText {
  type: "text"
  data: string
}

export interface DialogueMessageAudio {
  type: "audio"
  url: string
  data: FileReader["result"]
}

export type DialogueMessage = DialogueMessageText | DialogueMessageAudio

export interface DialogueState {
  image: DialogueFile | null
  message: DialogueMessage | null
  responses: any[]
  showResponse: boolean
}
