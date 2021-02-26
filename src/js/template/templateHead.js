export default (data) => {
  const h1 = document.createElement('h1')
  h1.className = 'app__title'
  h1.textContent = data.title

  const h2 = document.createElement('h2')
  h2.className = 'app__subtitle'
  h2.textContent = data.subtitle

  return h1.outerHTML.concat(h2.outerHTML)
}