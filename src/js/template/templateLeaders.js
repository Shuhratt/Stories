import templateHead from "./templateHead";

const templateHtml = (data, emoji, like, index, selectedUserId) => {
  const [firstName, lastName] = data.name.split(' ');
  const dataLike = `data-like=${like}`
  const voteItemClass = `leaders__list-item_vote`
  const voteBoxClass = `leaders__list-item-box_vote`
  const votePlaceClass = `leaders__list-item-place_vote`

  return `
    <div class="leaders__list-item ${data.id === selectedUserId ? voteItemClass : ''}" ${data.id === selectedUserId ? dataLike : ''} data-id="${data.id}" >
      <div class="leaders__list-item-box ${data.id === selectedUserId ? voteBoxClass : ''}">
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
      <div class="leaders__list-item-place ${data.id === selectedUserId ? votePlaceClass : ''}">
        <span class="leaders__list-item-place-num">${index + 1}</span>
      </div>
    </div>
  `
}

export default (item) => {
  const { selectedUserId, users } = item

  const maxUsers = 5
  const htmlHead = templateHead(item)

  const appBox = document.createElement('div')
  appBox.className = 'app__box'

  const slide__list = document.createElement('div')
  slide__list.className = 'leaders__list'

  const selectorVotePortrait = item.hasOwnProperty('selectedUserId') ? '_vote' : ''
  const usersHtml = users
    .slice(0, maxUsers)
    .map((user, index) => templateHtml(user, item.emoji, '👍', index, selectedUserId))
    .join('');

  slide__list.innerHTML = usersHtml
  appBox.append(slide__list)

  const app = document.createElement('div')
  app.className = 'app'

  app.append(htmlHead)
  app.append(appBox)

  return app.outerHTML

}