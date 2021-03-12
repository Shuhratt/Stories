import templateHead from "./templateHead";
import {randomNumber} from "../functions/functions";

const templateVoteUser = (data) => {
  const [firstName, lastName] = data.name.split(' ')
  return `
    <div class="vote__item">
      <div class="vote__item-avatar">
        <img class="leaders__list-item-avatar-img" src="images/2x/${data.avatar}"  alt="${data.name}" srcset="images/2x/${data.avatar} 1x,
        images/4x/${data.avatar} 2x" />
      </div>
      <div class="vote__item-name">
        <span>${firstName}</span>  
        <span>${lastName}</span>
      </div>
    </div>
    `
}



export default (item, orientation) => {
  const htmlHead = templateHead(item)

  const [firstUser, ...allUser] = item.users


  const app = document.createElement('div')
  app.className = 'app'

  const appBox = document.createElement('div')
  appBox.className = 'app__box app__box_row'

  // User #1 column
  const userCol = document.createElement('div')
  userCol.className = 'vote__col'
  userCol.innerHTML = templateVoteUser(firstUser)

  // Users #2 column
  const voteColUsers = document.createElement('div')
  voteColUsers.className = 'vote__col-users'
  const html = templateVoteUser(allUser[0]).concat(templateVoteUser(allUser[1]))
  voteColUsers.innerHTML = html

  // Buttons #3 column


  // Users #4 column


  // User #5 column


  appBox.append(userCol)
  appBox.append(voteColUsers)

  app.append(htmlHead)
  app.append(appBox)

  return app.outerHTML
}