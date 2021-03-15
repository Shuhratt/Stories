import templateHead from "./templateHead";

const templateHtml = (data, emoji, like, index, selector) => {
  const [firstName, lastName] = data.name.split(' ');
  const dataLike = `data-like=${like}`
  const voteItemClass = `leaders__list-item${selector}`
  const voteBox = `leaders__list-item-box${selector}`
  const votePlace = `leaders__list-item-place${selector}`

  return `
    <div class="leaders__list-item ${index + 1 === 5 ? voteItemClass : ''}" ${index + 1 === 5 ? dataLike : ''} >
      <div class="leaders__list-item-box ${index + 1 === 5 ? voteBox : ''}">
        <div class="leaders__list-item-emoji">${index + 1 === 1 ? emoji : '' }</div>
        <div class="leaders__list-item-avatar">
          <img class="leaders__list-item-avatar-img" src="images/2x/${data.avatar}"  alt="${data.name}" srcset="images/2x/${data.avatar} 1x, images/4x/${data.avatar} 2x" />
        </div>
        <div class="leaders__list-item-name">
          <span>${firstName}</span>  
          <span>${lastName}</span>
        </div>
        <div class="leaders__list-item-count">${data.valueText}</div>
      </div>
      <div class="leaders__list-item-place ${index + 1 === 5 ? votePlace : ''}">
        <span class="leaders__list-item-place-num">${index + 1}</span>
      </div>
    </div>
  `
}

export default (item) => {
  const maxUsers = 5
  const htmlHead = templateHead(item)

  const appBox = document.createElement('div')
  appBox.className = 'app__box'

  const slide__list = document.createElement('div')
  slide__list.className = 'leaders__list'

  const selectorVotePortrait = item.hasOwnProperty('selectedUserId') ? '_vote' : ''
  const usersHtml = item.users
    .slice(0, maxUsers)
    .map((user, index) => templateHtml(user, item.emoji, '👍', index, selectorVotePortrait))
    .join('');

  slide__list.innerHTML = usersHtml
  appBox.append(slide__list)

  const app = document.createElement('div')
  app.className = 'app'

  app.append(htmlHead)
  app.append(appBox)

  return app.outerHTML

}