  import '../scss/stories.scss'

  import Template from "./classes/Template"
  import { getOrientDeviceClient } from "./functions/functions";

  import dataObj from "./data.json"

  const Url = new URL(window.location.href)
  const slideIndex = parseInt(Url.searchParams.get('slide')) >= 1  ? parseInt(Url.searchParams.get('slide')) - 1 : 0
  const themeValue = Url.searchParams.get('theme') || null

  const themes = {
    light: 'theme_light',
    dark: 'theme_dark'
  }
  themeValue ? document.body.classList.add(themes[themeValue]) : ''

  sessionStorage.setItem('theme', themeValue ? themeValue : 'dark')
  sessionStorage.setItem('slideIndex', slideIndex.toString())

  const slideIndexStorage = parseInt(sessionStorage.getItem('slideIndex'))
  const {alias, data} = dataObj[slideIndexStorage]

  sessionStorage.setItem('data', JSON.stringify(data))
  sessionStorage.setItem('alias', alias)



  window.renderTemplate = (alias, data) => {
    const orientation = getOrientDeviceClient()
    const template = new Template(alias, data, slideIndex, orientation);
    const html = template.render()
    return html
  }
