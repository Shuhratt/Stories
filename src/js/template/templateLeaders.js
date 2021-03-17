import templateHead from "./templateHead";
import {createElement} from "../functions/functions";

const templateHtml = (data, emoji, like, index, selector) => {
  const { avatar, name, valueText: count } = data
  const [firstName, lastName] = name.split(' ')

  let currentId = index + 1
  const dataLike = `data-like=${like}`
  const voteItemClass = `leaders__list-item${selector}`
  const voteBox = `leaders__list-item-box${selector}`
  const votePlace = `leaders__list-item-place${selector}`

  return `
    <div class="leaders__list-item ${currentId === 5 ? voteItemClass : ''}" ${currentId === 5 ? dataLike : ''} >
      <div class="leaders__list-item-box ${currentId === 5 ? voteBox : ''}">
        <div class="leaders__list-item-emoji">${currentId === 1 ? emoji : '' }</div>
        <div class="leaders__list-item-avatar">
          <img class="leaders__list-item-avatar-img" src="images/2x/${avatar}"  alt="${name}" srcset="images/2x/${avatar} 1x, images/4x/${avatar} 2x" />
        </div>
        <div class="leaders__list-item-name">
          <span>${firstName}</span>  
          <span>${lastName}</span>
        </div>
        <div class="leaders__list-item-count">${count}</div>
      </div>
      <div class="leaders__list-item-place ${currentId === 5 ? votePlace : ''}">
        <span class="leaders__list-item-place-num">${currentId}</span>
      </div>
    </div>
  `
}

export default (item) => {
  const { users } = item

  const maxUsers = 5
  const htmlHead = templateHead(item)

  const appBox = createElement('app__box','div')
  const slide__list = createElement('leaders__list','div')

  const selectorVotePortrait = item.hasOwnProperty('selectedUserId') ? '_vote' : ''
  const usersHtml = users
    .slice(0, maxUsers)
    .map((user, index) => templateHtml(user, item.emoji, '👍', index, selectorVotePortrait))
    .join('');

  slide__list.innerHTML = usersHtml
  appBox.append(slide__list)

  const app = createElement('app', 'div')

  app.append(htmlHead)
  app.append(appBox)

  return app.outerHTML

}