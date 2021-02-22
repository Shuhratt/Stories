import * as _ from 'lodash';

const templateHtml = (data, emoji, like, index) => {
  return `
    <div class="leaders__list-item">
      <div class="leaders__list-item-avatar">
        <img class="leaders__list-item-avatar-img" src="images/2x/${data.avatar}"  alt="${data.name}" srcset="images/2x/${data.avatar} 1x,
        images/4x/${data.avatar} 2x" />
        <div class="leaders__list-item-emoji">${index + 1 === 1 ? emoji : like }</div>
      </div>
      <div class="leaders__list-item-name">${data.name}</div>
      <div class="leaders__list-item-count">${data.valueText}</div>
      <div class="leaders__list-item-place">
        <span class="leaders__list-item-place-num">${index + 1}</span>
      </div>
    </div>
  `
}

export default (item, slideIndex) => {
  const maxUsers = 5
  const htmlHead = `
    <h1 class="app__title">${slideIndex} ${item.title}</h1>
    <h2 class="app__subtitle">${item.subtitle}</h2>
  `
  const slide__list = document.createElement('div')
  slide__list.className = 'leaders__list'

  const usersHtml = item.users
    .slice(0, maxUsers)
    .map((user, index) => templateHtml(user, item.emoji, '👍', index));

  slide__list.innerHTML = usersHtml.join('').trim()
  return htmlHead + slide__list.outerHTML
}