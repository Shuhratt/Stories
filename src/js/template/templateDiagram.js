import templateHead from "./templateHead";
import {createElement} from "../functions/functions";

const templateCircle = (data) => {
  const { totalText, differenceText } = data

  const radius = 120
  const lengthCircle = 2 * Math.PI * radius

  const lengthFirstArc =  lengthCircle * (16.23 / 100)
  const lengthSecondArc = lengthCircle * (17.46 / 100)
  const lengthThreeArc = lengthCircle * (31.43 / 100)
  const lengthFourArc = lengthCircle * (33.63 / 100)

  const radOne = (lengthFirstArc * 360) / lengthCircle;
  const radSecond = (lengthSecondArc * 360) / lengthCircle;
  const radThree = (lengthThreeArc * 360) / lengthCircle;
  const radFour = (lengthFourArc * 360) / lengthCircle;

  console.log(lengthCircle)
  console.log(radOne, radSecond, radThree, radFour )
  console.log(radOne + radSecond+ radThree+ radFour )


  return `
    <div class="chart_diagram__circle">

      <svg class="chart_diagram__circle-chart" width="240" height="240" viewBox="0 0 285 285">
         <g>
            <circle class="chart_diagram__circle-chart-first" r="120" cx="50%" cy="50%" stroke-opacity="0.5" stroke-dasharray="${lengthFirstArc} ${lengthCircle}" transform="rotate(${-90 - (radOne / 2)} )" transform-origin="center" ></circle>
         </g> 
         <g>
           <circle class="chart_diagram__circle-chart-second" r="120" cx="50%" cy="50%" stroke-opacity="0.5" stroke-dasharray="${lengthSecondArc} ${lengthCircle}" transform="rotate(${-90 + (radOne / 2) + 1.125} )" transform-origin="center"></circle>
         </g>
 
          <g>
            <circle class="chart_diagram__circle-chart-middle" r="120" cx="50%" cy="50%" stroke-opacity="0.5" stroke-dasharray="${lengthThreeArc} ${lengthCircle}" transform="rotate(${-90 + (radOne / 2) + 1.125 + radSecond + 1.125 })" transform-origin="center"></circle>
          </g>
          <g>
            <circle class="chart_diagram__circle-chart-last" r="120" cx="50%" cy="50%" stroke-opacity="0.8" stroke-dasharray="${lengthFourArc} ${lengthCircle}" transform="rotate(${-90 + (radOne / 2) + 1.125 + radSecond + 1.125 + radThree + 1.125  })" transform-origin="center"></circle>
          </g>
                    <!--
          style="filter:url(#filter_circle_second)"
          -->
      
         <defs>
            <radialGradient id="circle_first" cx="0" cy="0" r="1" gradientTransform="translate(68.6238 132.376) rotate(90) scale(119.624)">
              <stop offset="0.71875" stop-color="#FFA300"/>
              <stop offset="1" stop-color="#5B3A00"/>
            </radialGradient>
            <radialGradient id="circle_second" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-32.3762 114.376) rotate(90) scale(119.624)">
              <stop offset="0.729167" stop-color="#633F00"/>
              <stop offset="1" stop-color="#0F0900"/>
            </radialGradient>
            <radialGradient id="circle_middle" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(64.6238 6.37619) rotate(90) scale(119.624)">
              <stop offset="0.71875" stop-color="#9B9B9B"/>
              <stop offset="1" stop-color="#382900"/>
            </radialGradient>
            <radialGradient id="circle_last" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(131.624 114.376) rotate(90) scale(119.624)">
              <stop offset="0.71875" stop-color="#4D4D4D"/>
              <stop offset="1" stop-color="#382900"/>
            </radialGradient>
           
            <filter id="filter_circle_first" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.618715 0 0 0 0 0 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.636666 0 0 0 0 0 0 0 0 0.9 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-1" dy="1"/>
              <feGaussianBlur stdDeviation="0.5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
              <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
            </filter>
            <filter id="filter_circle_second" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.575 0 0 0 0 0.365803 0 0 0 0 0 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.791667 0 0 0 0 0.504028 0 0 0 0 0 0 0 0 0.9 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-1" dy="1"/>
              <feGaussianBlur stdDeviation="0.5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
              <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
            </filter>
            <filter id="filter_circle_middle" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0.9 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-1" dy="1"/>
              <feGaussianBlur stdDeviation="0.5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
              <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
            </filter>
            <filter id="filter_circle_last" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0.9 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-1" dy="1"/>
              <feGaussianBlur stdDeviation="0.5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
              <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
            </filter>
         </defs>

      </svg>
      <div class="chart_diagram__circle-box">
       <h3 class="chart_diagram__circle-title">${totalText}</h3>
       <p class="chart_diagram__circle-result">${differenceText}</p>
      </div>
    </div>
 
  `
}


const templateRowCommits = (data, index) => {
  const { title, differenceText, valueText } = data
  const [progress, ...allDifferenceText] = differenceText.split(' ')
  const [result, ...allValueText] = valueText.split(' ')

  return `
    <div class="chart_diagram__row">
      <div class="chart_diagram__row-circle chart_diagram__row-circle_${index + 1}"></div>
      <div class="chart_diagram__row-counts">${title}</div>
      <div class="chart_diagram__row-progress">${progress}</div>
      <div class="chart_diagram__row-result">${result}</div>
    </div>
  `
}


export default (item) => {
  const { categories } = item
  const htmlHead = templateHead(item)
  const chart_diagram = createElement('chart_diagram','div')
  chart_diagram.insertAdjacentHTML('afterbegin', templateCircle(item));
  const chart_diagram__info = createElement('chart_diagram__info','div')
  const htmlRow = categories.map((row, index) => templateRowCommits(row, index)).join('')

  chart_diagram__info.insertAdjacentHTML('afterbegin', htmlRow )
  chart_diagram.insertAdjacentHTML('beforeend', chart_diagram__info.outerHTML )

  const app = createElement('app', 'div')
  const appBox = createElement( 'app__box','div')

  app.append(htmlHead)
  appBox.append(chart_diagram)
  app.append(appBox)

  return app.outerHTML

}