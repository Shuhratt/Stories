!function(){"use strict";!function(){const e=(e,a,t=null)=>{const i=document.createElement(a);return i.className=e,t&&(i.textContent=t),i};var a=a=>{const{title:t,subtitle:i}=a,r=e("app__header","div"),n=e("app__title","h1",t),l=e("app__subtitle","h2",i);return r.append(n),r.append(l),r};const t=new Map;t.set([0],"min"),t.set([1,2],"mid"),t.set([3,4],"max"),t.set([5,6],"extra");var i=(i,r)=>{const n="landscape"===r?"2 часа":"1 час",l=a(i),s=e("app__box","div");s.append(((a,i)=>{const r=e(`activity activity_${i}`,"div"),{data:n}=a;return Object.values(n).map((a=>{let n=((e,a)=>{let t=0,i=a;return e.reduce(((e,r,n,l)=>{const s=l.slice(t,i);if(s.length>0){const r=s.reduce(((e,a)=>e+a),0);e.push(r),t+=a,i+=a}return e}),[])})(a,"landscape"===i?2:1);const l=e(`activity__box_${i}`,"div");r.append(l),n.map((a=>{const r=(e=>{let a="";return 0===e?a="min":(t.forEach(((t,i)=>{const[r,n]=i;e>=r&&e<=n&&(a=t)})),a)})(a);l.append(e(`activity__cube activity__cube_${i} activity__cube_${i}_${r}`,"div"))}))})),r})(i,r));const o=e("activity__legend","div");o.innerHTML=(a=>{const i=e("legend__row","div"),r=a=>{const t=e("legend__item","div"),i=e("legend__item-box","div"),r=e("legend__item-text-gap","div",a);return t.append(i),t.append(r),t};return i.append(r(a)),t.forEach(((e,a)=>{const t=r(a.join(" — "));i.append(t)})),i.outerHTML})(n),s.append(o);const d=e("app","div");return d.append(l),d.append(s),d.outerHTML};class r{constructor(e,a,t,i="landscape"){this.alias=e,this.data=a,this.index=t,this.orientation=i}render(){let t="";switch(this.alias){case"leaders":t=(t=>{const{users:i}=t,r=a(t),n=e("app__box","div"),l=e("leaders__list","div"),s=Object.prototype.hasOwnProperty.call(t,"selectedUserId")?"_vote":"",o=i.slice(0,5).map(((e,a)=>((e,a,t,i,r)=>{const{avatar:n,name:l,valueText:s}=e,[o,d]=l.split(" ");let c=i+1;return`\n    <div class="leaders__list-item ${5===c?`leaders__list-item${r}`:""}" ${5===c?"data-like=👍":""} >\n      <div class="leaders__list-item-box ${5===c?`leaders__list-item-box${r}`:""}">\n        <div class="leaders__list-item-emoji">${1===c?a:""}</div>\n        <div class="leaders__list-item-avatar">\n          <img class="leaders__list-item-avatar-img" src="images/2x/${n}"  alt="${l}" srcset="images/2x/${n} 1x, images/4x/${n} 2x" />\n        </div>\n        <div class="leaders__list-item-name">\n          <span>${o}</span>  \n          <span>${d}</span>\n        </div>\n        <div class="leaders__list-item-count">${s}</div>\n      </div>\n      <div class="leaders__list-item-place ${5===c?`leaders__list-item-place${r}`:""}">\n        <span class="leaders__list-item-place-num">${c}</span>\n      </div>\n    </div>\n  `})(e,t.emoji,0,a,s))).join("");l.innerHTML=o,n.append(l);const d=e("app","div");return d.append(r),d.append(n),d.outerHTML})(this.data,this.index);break;case"vote":t=(t=>{const{users:i}=t,r=a(t),n=i.slice(0,8).map(((e,a)=>((e,a="")=>{const{id:t,name:i,avatar:r}=e,[n,l]=i.split(" ");return`\n    <div class="vote__item ${a}" data-params="" data-id="${t}">\n      <div class="vote__item-avatar">\n        <img class="vote__item-avatar-img" src="images/2x/${r}"  alt="${i}" srcset="images/2x/${r} 1x,\n        images/4x/${r} 2x" />\n      </div>\n      <div class="vote__item-name">\n        <span>${n}</span>  \n        <span>${l}</span>\n      </div>\n    </div>\n    `})(e,`vote__item-${a+1}${1===a?" active":""}`))).join("").concat('\n    <div class="vote__buttons">\n      <button class="btn vote__buttons-el"data-action="update" aria-label="Prev">\n        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path class="vote__buttons-el-path" fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"/>\n        </svg>\n      </button> \n      <button class="btn vote__buttons-el" data-action="update" aria-label="Next">\n        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path class="vote__buttons-el-path active" fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"/>\n        </svg>\n     </button>\n  </div>\n  '),l=e("app","div"),s=e("app__box app__box_grid","div");return s.innerHTML=n,l.append(r),l.append(s),l.outerHTML})(this.data,this.orientation);break;case"chart":t=((t,i)=>{const{values:r,users:n}=t,l=e("chart__box","div"),s=Math.max.apply(null,r.map((e=>e.value))),o=document.documentElement.clientHeight,d=r.slice(-12,-3).map((e=>((e,a,t,i)=>{const{value:r,title:n,active:l}=e,s={landscape:117/t,portrait:270/t};return`\n    <div class="chart_col${l?" chart_col_active":""}">\n      <div class="chart_col-count">${r}</div>\n      <div class="chart_col-box" style="height: ${Math.floor(r*s[a])/i*100}vh"></div>\n      <div class="chart_col-num">${n}</div>\n    </div>\n  `})(e,i,s,o))).join("");l.innerHTML=d;const c=e("chart__users","div"),v=n.slice(0,2).map((e=>(e=>{const{avatar:a,name:t,valueText:i}=e;return`\n    <div class="chart__users-el">\n      <div class="chart__users-el-avatar">\n        <img class="chart__users-el-avatar-img" src="images/2x/${a}"  alt="${a}" srcset="images/2x/${a} 1x, images/4x/${a} 2x">\n      </div>\n      <div class="chart__users-el-info">\n        <div class="chart__users-el-name">${t}</div>\n        <div class="chart__users-el-num">${i}</div>\n      </div>\n    </div>\n  `})(e))).join("");c.innerHTML=v;const u=e("app","div"),p=e("app__box","div"),m=a(t);return u.append(m),p.append(l),p.append(c),u.append(p),u.outerHTML})(this.data,this.orientation);break;case"diagram":t=(t=>{const{categories:i}=t,r=a(t),n=e("chart_diagram","div");n.insertAdjacentHTML("afterbegin",(e=>{const{totalText:a,differenceText:t}=e,i=2*Math.PI*120,r=.1623*i,n=.1746*i,l=.3143*i,s=360*r/i,o=360*n/i;return`\n    <div class="chart_diagram__circle">\n\n      <svg class="chart_diagram__circle-chart" width="240" height="240" viewBox="0 0 285 285">\n         <g>\n            <circle class="chart_diagram__circle-chart-first" r="120" cx="50%" cy="50%" stroke-dasharray="${r} ${i}" transform="rotate(${-90-s/2} )" transform-origin="center" ></circle>\n         </g> \n         <g>\n           <circle class="chart_diagram__circle-chart-second" r="120" cx="50%" cy="50%" stroke-dasharray="${n} ${i}" transform="rotate(${s/2-90+1.125} )" transform-origin="center"></circle>\n         </g>\n \n          <g>\n            <circle class="chart_diagram__circle-chart-middle" r="120" cx="50%" cy="50%" stroke-dasharray="${l} ${i}" transform="rotate(${s/2-90+1.125+o+1.125})" transform-origin="center"></circle>\n          </g>\n          <g>\n            <circle class="chart_diagram__circle-chart-last" r="120" cx="50%" cy="50%" stroke-dasharray="${i*(33.63/100)} ${i}" transform="rotate(${s/2-90+1.125+o+1.125+360*l/i+1.125})" transform-origin="center"></circle>\n          </g>\n                    \x3c!--\n          style="filter:url(#filter_circle_second)"\n          --\x3e\n      \n         <defs>\n            <radialGradient id="circle_first" cx="0" cy="0" r="1" gradientTransform="translate(68.6238 132.376) rotate(90) scale(119.624)">\n              <stop offset="0.71875" stop-color="#FFA300"/>\n              <stop offset="1" stop-color="#5B3A00"/>\n            </radialGradient>\n            <radialGradient id="circle_second" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-32.3762 114.376) rotate(90) scale(119.624)">\n              <stop offset="0.729167" stop-color="#633F00"/>\n              <stop offset="1" stop-color="#0F0900"/>\n            </radialGradient>\n            <radialGradient id="circle_middle" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(64.6238 6.37619) rotate(90) scale(119.624)">\n              <stop offset="0.71875" stop-color="#9B9B9B"/>\n              <stop offset="1" stop-color="#382900"/>\n            </radialGradient>\n            <radialGradient id="circle_last" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(131.624 114.376) rotate(90) scale(119.624)">\n              <stop offset="0.71875" stop-color="#4D4D4D"/>\n              <stop offset="1" stop-color="#382900"/>\n            </radialGradient>\n           \n            <filter id="filter_circle_first" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n              <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n              <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>\n              <feOffset/>\n              <feGaussianBlur stdDeviation="10"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.618715 0 0 0 0 0 0 0 0 0.2 0"/>\n              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n              <feOffset/>\n              <feGaussianBlur stdDeviation="10"/>\n              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.636666 0 0 0 0 0 0 0 0 0.9 0"/>\n              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n              <feOffset dx="-1" dy="1"/>\n              <feGaussianBlur stdDeviation="0.5"/>\n              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>\n              <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>\n            </filter>\n            <filter id="filter_circle_second" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n              <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n              <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>\n              <feOffset/>\n              <feGaussianBlur stdDeviation="10"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 0.575 0 0 0 0 0.365803 0 0 0 0 0 0 0 0 0.2 0"/>\n              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n              <feOffset/>\n              <feGaussianBlur stdDeviation="10"/>\n              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 0.791667 0 0 0 0 0.504028 0 0 0 0 0 0 0 0 0.9 0"/>\n              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n              <feOffset dx="-1" dy="1"/>\n              <feGaussianBlur stdDeviation="0.5"/>\n              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>\n              <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>\n            </filter>\n            <filter id="filter_circle_middle" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n              <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n              <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>\n              <feOffset/>\n              <feGaussianBlur stdDeviation="10"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>\n              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n              <feOffset/>\n              <feGaussianBlur stdDeviation="10"/>\n              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0.9 0"/>\n              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n              <feOffset dx="-1" dy="1"/>\n              <feGaussianBlur stdDeviation="0.5"/>\n              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>\n              <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>\n            </filter>\n            <filter id="filter_circle_last" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n              <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n              <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>\n              <feOffset/>\n              <feGaussianBlur stdDeviation="10"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0.2 0"/>\n              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n              <feOffset/>\n              <feGaussianBlur stdDeviation="10"/>\n              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0.9 0"/>\n              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n              <feOffset dx="-1" dy="1"/>\n              <feGaussianBlur stdDeviation="0.5"/>\n              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>\n              <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>\n            </filter>\n         </defs>\n\n      </svg>\n      <div class="chart_diagram__circle-box">\n       <h3 class="chart_diagram__circle-title">${a}</h3>\n       <p class="chart_diagram__circle-result">${t}</p>\n      </div>\n    </div>\n \n  `})(t));const l=e("chart_diagram__info","div"),s=i.map(((e,a)=>((e,a)=>{const{title:t,differenceText:i,valueText:r}=e,[n,,]=i.split(" "),[l,,]=r.split(" ");return`\n    <div class="chart_diagram__row">\n      <div class="chart_diagram__row-circle chart_diagram__row-circle_${a+1}"></div>\n      <div class="chart_diagram__row-counts">${t}</div>\n      <div class="chart_diagram__row-progress">${n}</div>\n      <div class="chart_diagram__row-result">${l}</div>\n    </div>\n  `})(e,a))).join("");l.insertAdjacentHTML("afterbegin",s),n.insertAdjacentHTML("beforeend",l.outerHTML);const o=e("app","div"),d=e("app__box","div");return o.append(r),d.append(n),o.append(d),o.outerHTML})(this.data);break;case"activity":t=i(this.data,this.orientation);break;default:console.error("Sorry, we are out of "+this.alias+".")}return t}}var n=JSON.parse('[{"alias":"leaders","data":{"title":"Больше всего коммитов","subtitle":"Спринт № 213","emoji":"👑","users":[{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"32"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"27"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"22"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"20"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"19"}]}},{"alias":"leaders","data":{"title":"Самый большой коммит","subtitle":"Спринт № 213","emoji":"😮","users":[{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"4001 строка"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"3845 строк"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"3640 строк"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"3453 строки"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"2852 строки"}]}},{"alias":"vote","data":{"title":"Самый 🔎 внимательный разработчик","subtitle":"Спринт № 213","emoji":"🔎","selectedUserId":4,"users":[{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"22 голоса"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"19 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"17 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"16 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"10 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"9 голосов"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"8 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"7 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"6 голосов"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"5 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"4 голоса"}]}},{"alias":"leaders","data":{"title":"Самый 🔎 внимательный разработчик","subtitle":"Спринт № 213","emoji":"🔎","selectedUserId":11,"users":[{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"22 голоса"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"19 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"17 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"16 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"15 голосов"},{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"14 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"12 голосов"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"9 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"8 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"6 голосов"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"5 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"4 голоса"}]}},{"alias":"vote","data":{"title":"Самый 👪 командный разработчик","subtitle":"Спринт № 213","emoji":"👪","offset":8,"users":[{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"24 голоса"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"21 голос"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"19 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"18 голосов"},{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"16 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"14 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"13 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"9 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"7 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"6 голосов"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"5 голосов"}]}},{"alias":"leaders","data":{"title":"Самый 👪 командный разработчик","subtitle":"Спринт № 213","emoji":"👪","selectedUserId":6,"users":[{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"24 голоса"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"21 голос"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"19 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"18 голосов"},{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"16 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"14 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"13 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"9 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"7 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"6 голосов"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"5 голосов"}]}},{"alias":"chart","data":{"title":"Коммиты","subtitle":"Спринт № 213","values":[{"title":"203","value":108},{"title":"204","value":160},{"title":"205","value":126},{"title":"206","value":134},{"title":"207","value":112},{"title":"208","value":152},{"title":"209","value":128},{"title":"210","value":164},{"title":"211","value":118},{"title":"212","value":140},{"title":"213","value":182,"active":true},{"title":"214","value":0},{"title":"215","value":0},{"title":"216","value":0},{"title":"217","value":0},{"title":"218","value":0}],"users":[{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"32"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"27"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"22"}]}},{"alias":"chart","data":{"title":"Строки кода","subtitle":"Спринт № 213","values":[{"title":"203","value":47798},{"title":"204","value":68590},{"title":"205","value":55472},{"title":"206","value":63073},{"title":"207","value":51917},{"title":"208","value":65852},{"title":"209","value":60693},{"title":"210","value":70631},{"title":"211","value":57299},{"title":"212","value":62839},{"title":"213","value":74156,"active":true},{"title":"214","value":0},{"title":"215","value":0},{"title":"216","value":0},{"title":"217","value":0},{"title":"218","value":0}],"users":[{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"8739"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"7538"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"6845"}]}},{"alias":"diagram","data":{"title":"Размер коммитов","subtitle":"Спринт № 213","totalText":"182 коммита","differenceText":"+42 с прошлого спринта","categories":[{"title":"> 1001 строки","valueText":"30 коммитов","differenceText":"+8 коммитов"},{"title":"501 — 1000 строк","valueText":"32 коммита","differenceText":"+6 коммитов"},{"title":"101 — 500 строк","valueText":"58 коммитов","differenceText":"+16 коммитов"},{"title":"1 — 100 строк","valueText":"62 коммита","differenceText":"+12 коммитов"}]}},{"alias":"activity","data":{"title":"Коммиты, 1 неделя","subtitle":"Спринт № 213","data":{"mon":[0,0,0,0,1,0,0,0,0,0,2,3,2,1,0,1,0,0,0,0,0,0,0,0],"tue":[0,0,0,0,1,0,0,0,0,5,0,4,0,0,0,0,1,0,3,0,0,2,1,0],"wed":[1,0,0,0,1,0,5,0,0,4,0,0,0,5,0,2,1,0,0,0,0,0,0,1],"thu":[0,1,0,1,0,0,0,0,6,0,1,0,0,1,0,0,5,0,0,0,1,0,0,0],"fri":[0,0,0,0,0,0,0,1,3,0,0,5,0,4,0,0,3,0,0,0,0,1,0,0],"sat":[0,0,0,0,2,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0],"sun":[0,0,0,0,0,0,0,1,0,0,0,0,3,1,0,0,0,0,0,0,1,0,0,0]}}},{"alias":"activity","data":{"title":"Коммиты, 2 неделя","subtitle":"Спринт № 213","data":{"mon":[0,1,1,1,0,0,0,0,0,4,0,0,2,0,0,0,0,1,0,0,0,2,0,2],"tue":[0,1,2,1,0,0,0,0,1,1,0,0,0,0,5,0,0,0,0,0,0,0,0,0],"wed":[0,0,0,0,2,0,1,2,0,3,0,0,0,0,0,0,0,0,0,3,1,1,0,0],"thu":[0,0,2,0,0,0,0,1,2,0,0,0,0,0,1,2,0,3,0,1,1,0,0,0],"fri":[0,0,0,1,1,0,2,0,4,0,0,0,2,0,3,2,0,0,0,0,1,1,0,1],"sat":[1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,2,2,0,2,0,0],"sun":[0,0,0,0,2,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1]}}}]');const l=new URL(window.location.href),s=parseInt(l.searchParams.get("slide"))>=1?parseInt(l.searchParams.get("slide"))-1:0,o=l.searchParams.get("theme")||null;o&&document.body.classList.add({light:"theme_light",dark:"theme_dark"}[o]),sessionStorage.setItem("theme",o||"dark"),sessionStorage.setItem("slideIndex",s.toString());const d=n[parseInt(sessionStorage.getItem("slideIndex"))];if(d){const{alias:e,data:a}=d;sessionStorage.setItem("data",JSON.stringify(a)),sessionStorage.setItem("alias",e),window.renderTemplate=(e,a)=>{const t=document.documentElement.clientWidth>document.documentElement.clientHeight?"landscape":"portrait";return new r(e,a,s,t).render()},window.addEventListener("resize",(()=>{body.innerHTML="",body.innerHTML=renderTemplate(sessionStorage.getItem("alias"),JSON.parse(sessionStorage.getItem("data")))}))}else window.location.href="/"}()}();