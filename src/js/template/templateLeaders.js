import * as _ from 'lodash';

const templateHtml = (user, emoji, like, index) => {
  return `
    <div class="slide__list-item">
      <div class="slide__list-item-avatar">
        <img class="slide__list-item-avatar-img" src="images/2x/${user.avatar}"  alt="${user.name}" srcset="images/2x/${user.avatar} 1x,
        images/4x/${user.avatar} 2x" />
        <div class="slide__list-item-emoji">${index + 1 === 1 ? emoji : like }</div>
      </div>
      <div class="slide__list-item-name">${user.name}</div>
      <div class="slide__list-item-count">${user.valueText}</div>
      <div class="slide__list-item-place">
        <span class="slide__list-item-place-num">${index + 1}</span>
      </div>
    </div>
  `
}

export default (item, slideIndex) => {

  const htmlHead = `
    <h1 class="slide__title">${slideIndex} ${item.title}</h1>
    <h2 class="slide__subtitle">${item.subtitle}</h2>
  `
  const slide__list = document.createElement('div')
  slide__list.className = 'slide__list'

  // const sorted = _.orderBy(item.users, ['valueText'], ['desc']);
  const usersHtml = item.users.map((user, index) => templateHtml(user, item.emoji, '👍', index))

  slide__list.innerHTML = usersHtml.join('').trim()
  return htmlHead + slide__list.outerHTML
}