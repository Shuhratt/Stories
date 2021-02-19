
const templateHtml = (user, emoji, like, index) => {
  return `
    
  `

}

export default (item, slideIndex) => {

  const htmlHead = `
    <h1 class="slide__title">${slideIndex} ${item.title}</h1>
    <h2 class="slide__subtitle">${item.subtitle}</h2>
  `

  return htmlHead
}