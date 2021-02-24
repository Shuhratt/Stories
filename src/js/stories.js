  import '../scss/stories.scss'

  import Template from "./classes/Template"
  import {getOrientDeviceClient} from "./functions/functions";

  const app = document.getElementById('app');

  const Url = new URL(window.location.href)
  const slideIndex = parseInt(Url.searchParams.get('slide')) >= 1  ? parseInt(Url.searchParams.get('slide')) - 1 : 0
  const themeValue = Url.searchParams.get('theme') || null
  console.log(slideIndex)

  const themes = {
    light: 'theme_light',
    dark: 'theme_dark'
  }

  themeValue ? document.body.classList.add(themes[themeValue]) : ''

  window.renderTemplate = (alias, data) => {
    const orientation = getOrientDeviceClient()
    console.log(orientation)
    const template = new Template(alias, data, slideIndex, orientation);
    const html = template.render()
    app.innerHTML = ''
    app.insertAdjacentHTML('afterbegin', html)
  }

  const url = '/data.json'
  fetch(url)
    .then(response => response.json())
    .then(result => {
      const alias = result[slideIndex].alias
      const data = result[slideIndex].data
      renderTemplate(alias, data)

      window.addEventListener('resize', () => {
        window.renderTemplate(alias, data)
      })

    }).catch(e => {
     console.error("Ошибка: " + e);
    })