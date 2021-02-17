import '../scss/stories.scss'

import leadersHtml from "./slide/leadersHtml";

const app = document.getElementById('app');

const url = new URL(window.location.href)
const slideIndex = parseInt(url.searchParams.get('slide')) || 0
const themeValue = url.searchParams.get('theme')

const themes = {
  light: 'theme_light',
  dark: 'theme_dark'
}

themeValue ? document.body.classList.add(themes[themeValue]) : ''



const data = async (url, method) => {
  let response = await fetch(url, {
    method
  });

  if (response.ok) {
    let json = await response.json();
    return json
  } else {
    console.error("Ошибка HTTP: " + response.status);
  }
}


const renderTemplate =  async (alias, data) => {
  const res = await data
  const html = leadersHtml(res[slideIndex - 1].data)

  app.insertAdjacentHTML('afterbegin', html)
  // return html со слайдом
}
renderTemplate('leaders', data('/data.json', 'GET'))

