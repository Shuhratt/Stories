export default (item) => {
  const html = `
    <div class="slide__list-item slide__list-item_first">
      <div class="slide__list-item-avatar">
        <img class="slide__list-item-avatar-img" src="${item.avatar}" alt="" />
        <div class="slide__list-item-emoji">👑</div>
      </div>
      <div class="slide__list-item-name">${item.name}</div>
      <div class="slide__list-item-count">${item.valueText}</div>
      <div class="slide__list-item-place slide__list-item-place_first">
        <span class="slide__list-item-place-num">1</span>
      </div>
    </div>
  `

  return html
}
