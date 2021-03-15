import templateHead from "./templateHead";
import {randomNumber} from "../functions/functions";

const templateVoteUser = (data, selector= '' ) => {
  const [firstName, lastName] = data.name.split(' ')
  return `
    <div class="vote__item ${selector}" data-params="" data-id="${data.id}">
      <div class="vote__item-avatar">
        <img class="vote__item-avatar-img" src="images/2x/${data.avatar}"  alt="${data.name}" srcset="images/2x/${data.avatar} 1x,
        images/4x/${data.avatar} 2x" />
      </div>
      <div class="vote__item-name">
        <span>${firstName}</span>  
        <span>${lastName}</span>
      </div>
    </div>
    `
}

const templateButtonsSlide = () => {
  return `
    <div class="vote__buttons">
      <div class="vote__buttons-el"data-action="update">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="vote__buttons-el-path" fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"/>
        </svg>
      </div> 
      <div class="vote__buttons-el" data-action="update">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="vote__buttons-el-path active" fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"/>
        </svg>
     </div>
  </div>
  `
}

export default (item, orientation) => {
  const htmlHead = templateHead(item)
  let startUser = 0,
      endUser = 8;

  const app = document.createElement('div')
  app.className = 'app'

  const appBox = document.createElement('div')
  appBox.className = 'app__box app__box_grid'

  const usersHtml = item.users
    .slice(startUser, endUser)
    .map((card, index) => {
      return templateVoteUser(card, `vote__item-${index + 1}${index === 1 ? ' active' : '' }`)
    })
    .join('')
    .concat(templateButtonsSlide());

  appBox.innerHTML = usersHtml

  app.append(htmlHead)
  app.append(appBox)

  return app.outerHTML
}