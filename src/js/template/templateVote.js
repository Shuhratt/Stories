import templateHead from "./templateHead";

export default (item) => {
  const htmlHead = templateHead(item)

  const app = document.createElement('div')
  app.className = 'app'

  app.append(htmlHead)

  return app.outerHTML
}