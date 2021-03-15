import templateHead from "./templateHead";

const templateHtml = (data, emoji, like, index) => {
  const [firstName, lastName] = data.name.split(' ')
  return `
    <div class="leaders__list-item">
      <div class="leaders__list-item-box">
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
      <div class="leaders__list-item-place">
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

  const usersHtml = item.users
    .slice(0, maxUsers)
    .map((user, index) => templateHtml(user, item.emoji, '👍', index))
    .join('');

  slide__list.innerHTML = usersHtml
  appBox.append(slide__list)

  const app = document.createElement('div')
  app.className = 'app'

  app.append(htmlHead)
  app.append(appBox)

  return app.outerHTML

}