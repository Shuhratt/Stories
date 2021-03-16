export default (data) => {
  const { title, subtitle } = data
  const app__header = document.createElement('div')
  app__header.className = 'app__header'

  const h1 = document.createElement('h1')
  h1.className = 'app__title'
  h1.textContent = title

  app__header.append(h1)
  const h2 = document.createElement('h2')
  h2.className = 'app__subtitle'
  h2.textContent = subtitle

  app__header.append(h2)

  return app__header
}