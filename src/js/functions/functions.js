export const operations = () => {

}

export const getOrientDeviceClient = () => {
  return document.body.clientWidth > document.body.clientHeight ? 'landscape' : 'portrait'
}