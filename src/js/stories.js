  import '../scss/stories.scss'

  import leadersHtml from "./slide/leadersHtml";

  const app = document.getElementById('app');

  const url = new URL(window.location.href)
  const slideIndex = parseInt(url.searchParams.get('slide')) >= 1  ? parseInt(url.searchParams.get('slide')) - 1 : 0
  const themeValue = url.searchParams.get('theme') || null
  console.log(slideIndex)

  const themes = {
    light: 'theme_light',
    dark: 'theme_dark'
  }
  themeValue ? document.body.classList.add(themes[themeValue]) : ''


  const template = {
    leaders: (data, index) => {
      return leadersHtml(data, index)
    },
    vote: () => {
      console.error('Шаблона нет')
    },
    chart: () => {
      console.error('Шаблона нет')
    },
    diagram: () => {
      console.error('Шаблона нет')
    },
    activity: () => {
      console.error('Шаблона нет')
    }
  }

  const renderTemplate =  async (alias, data) => {
    const html = template[alias](data, slideIndex)
    app.insertAdjacentHTML('afterbegin', html)
  }

  const data = '/data.json'
  fetch(data).then(response => response.json())
    .then(result => {
      const alias = result[slideIndex].alias
      const data = result[slideIndex].data
      renderTemplate(alias, data)

    }).catch(e => {
     console.error("Ошибка: " + e);
    })




