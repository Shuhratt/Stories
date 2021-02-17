import '../scss/stories.scss'

import leadersHtml from "./slide/leadersHtml";

const app = document.getElementById('app');


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
  console.log(await data)
  // return html со слайдом
}
renderTemplate('leaders', data('/data.json', 'GET'))

