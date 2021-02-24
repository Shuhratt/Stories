export const operations = () => {

}

export const getOrientDeviceClient = () => {
  return document.documentElement.clientWidth > document.documentElement.clientHeight ? 'landscape' : 'portrait'
}