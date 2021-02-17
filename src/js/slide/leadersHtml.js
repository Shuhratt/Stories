export default (item) => {
  const html = `
    <h1 class="slide__title">${item.title}</h1>
    <h2 class="slide__subtitle">${item.subtitle}</h2>
  `
  return html
}
