import templateHead from "./templateHead";

const templateVoteUser = (data) => {
  return `
    <div class="vote__item">
      <div class="vote__item-avatar">
        <img class="leaders__list-item-avatar-img" src="images/2x/${data.avatar}"  alt="${data.name}" srcset="images/2x/${data.avatar} 1x,
        images/4x/${data.avatar} 2x" />
      </div>
      <div class="vote__item-name">${data.name}</div>
    </div>
    `
}

export default (item, orientation) => {
  const htmlHead = templateHead(item)

  const [firstUser, secondUser, ...allUser] = item.users


  const app = document.createElement('div')
  app.className = 'app'

  const appBox = document.createElement('div')
  appBox.className = 'app__box'

  const voteCol = document.createElement('div')
  voteCol.className = 'vote__col'
  voteCol.innerHTML = templateVoteUser(firstUser)


  appBox.append(voteCol)

  app.append(htmlHead)
  app.append(appBox)

  return app.outerHTML
}