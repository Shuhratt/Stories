  import '../scss/stories.scss'

  import Template from "./classes/Template"
  import { getOrientDeviceClient } from "./functions/functions";

  const Url = new URL(window.location.href)
  const slideIndex = parseInt(Url.searchParams.get('slide')) >= 1  ? parseInt(Url.searchParams.get('slide')) - 1 : 0
  const themeValue = Url.searchParams.get('theme') || null

  const themes = {
    light: 'theme_light',
    dark: 'theme_dark'
  }

  sessionStorage.setItem('theme', themeValue ? themeValue : 'dark')
  themeValue ? document.body.classList.add(themes[themeValue]) : ''


  window.renderTemplate = (alias, data) => {
    /**
     *
     * @return {string}
     */

    const orientation = getOrientDeviceClient()
    console.log(slideIndex)
    console.log(orientation)
    console.log(sessionStorage.getItem('theme')) // theme

    const template = new Template(alias, data, slideIndex, orientation);
    const html = template.render()

    return html
  }

  const loadApp = async () =>{
    const url = '/data.json'
    try {
      const load = await fetch(url)
      const toJson = await load.json()

      const alias = toJson[slideIndex].alias
      const data = toJson[slideIndex].data

      const html = renderTemplate(alias, data)
      document.body.innerHTML = html

      window.addEventListener('resize', (e) => {
        const html = renderTemplate(alias, data)
        document.body.innerHTML = ''
        document.body.innerHTML = html
      })
    } catch (e) {
      console.error("Ошибка: " + e);
    }
  }

  window.addEventListener('load', async () => {
    await loadApp()
  })
