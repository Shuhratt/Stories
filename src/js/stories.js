  import '../scss/stories.scss'

  import templateLeaders from "./template/templateLeaders";
  import templateChart from "./template/templateChart";

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


  const templates = {
    leaders: (data, index) => {
      return templateLeaders(data, index)
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

  const renderTemplate = (alias, data) => {
    const html = templates[alias](data, slideIndex)
    app.insertAdjacentHTML('afterbegin', html)
  }

  const url = '/data.json'
  fetch(url).then(response => response.json())
    .then(result => {
      const alias = result[slideIndex].alias
      const data = result[slideIndex].data
      renderTemplate(alias, data)

    }).catch(e => {
     console.error("Ошибка: " + e);
    })




