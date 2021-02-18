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



const data = async (url) => {
  let response = await fetch(url);

  if (response.ok) {
    let json = await response.json();
    return json
  } else {
    console.error("Ошибка HTTP: " + response.status);
  }
}


const renderTemplate =  async (alias, data) => {
  const res = await data

  const template = {
    leaders: (data, index) => {
      return leadersHtml(data, index)
    },
    vote: () => {},
    chart: () => {},
    diagram: () => {},
    activity: () => {}
  }
  const html = template[alias](res[slideIndex].data, slideIndex)

  app.insertAdjacentHTML('afterbegin', html)
  // return html со слайдом
}
renderTemplate('leaders', data('/data.json'))

