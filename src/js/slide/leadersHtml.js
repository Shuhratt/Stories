const templateUser = (user) => {
  return `
    <div class="slide__list-item slide__list-item_first">
      <div class="slide__list-item-avatar">
        <img class="slide__list-item-avatar-img" src="images/${user.id}.png" alt="" />
        <div class="slide__list-item-emoji">${user.emoji}</div>
      </div>
      <div class="slide__list-item-name">${user.name}</div>
      <div class="slide__list-item-count">${user.valueText}</div>
      <div class="slide__list-item-place slide__list-item-place_first">
        <span class="slide__list-item-place-num">1</span>
      </div>
    </div>
  `
}

export default (item) => {

  const htmlHead = `
    <h1 class="slide__title">${item.title}</h1>
    <h2 class="slide__subtitle">${item.subtitle}</h2>
  `
  const slide__list = document.createElement('div')
  slide__list.className = 'slide__list'

  const usersHtml = item.users.map((user) => templateUser(user))
  slide__list.innerHTML = usersHtml.join('')
  return htmlHead + slide__list.outerHTML
}
