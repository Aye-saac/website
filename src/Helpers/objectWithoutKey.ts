export const objectWithoutKey = (object: Record<string, any>, key: string) => {
  const { [key]: deletedKey, ...otherKeys } = object
  return otherKeys
}
