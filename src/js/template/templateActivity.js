import templateHead from "./templateHead";

const templateHtml = (data) => {
  return `
    <div class="canvas">
       <i class="cube"></i>
    </div>  
  `

}

window.addEventListener('window', () => {
  console.log(document.getElementById('canvas'))

})
export default (item) => {
  const htmlHead = templateHead(item)


  return htmlHead.concat(templateHtml(item))
}

