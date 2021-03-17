(()=>{"use strict";(()=>{const a=(a,e,t=null)=>{const i=document.createElement(e);return i.className=a,t&&(i.textContent=t),i},e=e=>{const{title:t,subtitle:i}=e,s=a("app__header","div"),l=a("app__title","h1",t),n=a("app__subtitle","h2",i);return s.append(l),s.append(n),s},t=new Map;t.set([0],"min"),t.set([1,2],"mid"),t.set([3,4],"max"),t.set([5,6],"extra");const i=(i,s)=>{const l="landscape"===s?"2 часа":"1 час",n=e(i),r=a("app__box","div");r.append(((e,i)=>{const s=a(`activity activity_${i}`,"div"),{data:l}=e;return Object.values(l).map((e=>{let l=((a,e)=>{let t=0,i=e;return a.reduce(((a,s,l,n)=>{const r=n.slice(t,i);if(r.length>0){const s=r.reduce(((a,e)=>a+e),0);a.push(s),t+=e,i+=e}return a}),[])})(e,"landscape"===i?2:1);const n=a(`activity__box_${i}`,"div");s.append(n),l.map((e=>{const s=(a=>{let e="";return 0===a?e="min":(t.forEach(((t,i)=>{const[s,l]=i;a>=s&&a<=l&&(e=t)})),e)})(e);n.append(a(`activity__cube activity__cube_${i} activity__cube_${i}_${s}`,"div"))}))})),s})(i,s));const d=a("activity__legend","div"),v=(e=>{const i=a("legend__row","div"),s=e=>{const t=a("legend__item","div"),i=a("legend__item-box","div"),s=a("legend__item-text-gap","div",e);return t.append(i),t.append(s),t};return i.append(s(e)),t.forEach(((a,e,t)=>{const l=s(e.join(" — "));i.append(l)})),i.outerHTML})(l);d.innerHTML=v,r.append(d);const c=a("app","div");return c.append(n),c.append(r),c.outerHTML};class s{constructor(a,e,t,i="landscape"){this.alias=a,this.data=e,this.index=t,this.orientation=i}render(){switch(this.alias){case"leaders":return(t=>{const{users:i}=t,s=e(t),l=a("app__box","div"),n=a("leaders__list","div"),r=t.hasOwnProperty("selectedUserId")?"_vote":"",d=i.slice(0,5).map(((a,e)=>((a,e,t,i,s)=>{const{avatar:l,name:n,valueText:r}=a,[d,v]=n.split(" ");let c=i+1;return`\n    <div class="leaders__list-item ${5===c?`leaders__list-item${s}`:""}" ${5===c?"data-like=👍":""} >\n      <div class="leaders__list-item-box ${5===c?`leaders__list-item-box${s}`:""}">\n        <div class="leaders__list-item-emoji">${1===c?e:""}</div>\n        <div class="leaders__list-item-avatar">\n          <img class="leaders__list-item-avatar-img" src="images/2x/${l}"  alt="${n}" srcset="images/2x/${l} 1x, images/4x/${l} 2x" />\n        </div>\n        <div class="leaders__list-item-name">\n          <span>${d}</span>  \n          <span>${v}</span>\n        </div>\n        <div class="leaders__list-item-count">${r}</div>\n      </div>\n      <div class="leaders__list-item-place ${5===c?`leaders__list-item-place${s}`:""}">\n        <span class="leaders__list-item-place-num">${c}</span>\n      </div>\n    </div>\n  `})(a,t.emoji,0,e,r))).join("");n.innerHTML=d,l.append(n);const v=a("app","div");return v.append(s),v.append(l),v.outerHTML})(this.data,this.index);case"vote":return(t=>{const{users:i}=t,s=e(t),l=i.slice(0,8).map(((a,e)=>((a,e="")=>{const{id:t,name:i,avatar:s}=a,[l,n]=i.split(" ");return`\n    <div class="vote__item ${e}" data-params="" data-id="${t}">\n      <div class="vote__item-avatar">\n        <img class="vote__item-avatar-img" src="images/2x/${s}"  alt="${i}" srcset="images/2x/${s} 1x,\n        images/4x/${s} 2x" />\n      </div>\n      <div class="vote__item-name">\n        <span>${l}</span>  \n        <span>${n}</span>\n      </div>\n    </div>\n    `})(a,`vote__item-${e+1}${1===e?" active":""}`))).join("").concat('\n    <div class="vote__buttons">\n      <button class="btn vote__buttons-el"data-action="update" aria-label="Prev">\n        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path class="vote__buttons-el-path" fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"/>\n        </svg>\n      </button> \n      <button class="btn vote__buttons-el" data-action="update" aria-label="Next">\n        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path class="vote__buttons-el-path active" fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"/>\n        </svg>\n     </button>\n  </div>\n  '),n=a("app","div"),r=a("app__box app__box_grid","div");return r.innerHTML=l,n.append(s),n.append(r),n.outerHTML})(this.data,this.orientation);case"chart":return((t,i)=>{const{values:s,users:l}=t,n=a("chart__box","div"),r=Math.max.apply(null,s.map((a=>a.value))),d=document.documentElement.clientHeight,v=s.slice(-12,-3).map((a=>((a,e,t,i)=>{const{value:s,title:l,active:n}=a,r={landscape:117/t,portrait:270/t};return`\n    <div class="chart_col${n?" chart_col_active":""}">\n      <div class="chart_col-count">${s}</div>\n      <div class="chart_col-box" style="height: ${Math.floor(s*r[e])/i*100}vh"></div>\n      <div class="chart_col-num">${l}</div>\n    </div>\n  `})(a,i,r,d))).join("");n.innerHTML=v;const c=a("chart__users","div"),u=l.slice(0,2).map((a=>(a=>{const{avatar:e,name:t,valueText:i}=a;return`\n    <div class="chart__users-el">\n      <div class="chart__users-el-avatar">\n        <img class="chart__users-el-avatar-img" src="images/2x/${e}"  alt="${e}" srcset="images/2x/${e} 1x, images/4x/${e} 2x">\n      </div>\n      <div class="chart__users-el-info">\n        <div class="chart__users-el-name">${t}</div>\n        <div class="chart__users-el-num">${i}</div>\n      </div>\n    </div>\n  `})(a))).join("");c.innerHTML=u;const p=a("app","div"),o=a("app__box","div"),m=e(t);return p.append(m),o.append(n),o.append(c),p.append(o),p.outerHTML})(this.data,this.orientation);case"diagram":return(a=>{const t=e(a),i=document.createElement("div");i.className="app",i.append(t);const s=document.createElement("div");s.className="chart_diagram",s.insertAdjacentHTML("afterbegin",(a=>{const{totalText:e,differenceText:t}=a;return`\n    <div class="chart_diagram__circle">\n      <svg class="chart_diagram__circle-chart" width="240" height="240" viewBox="0 0 285 285">\n        <circle class="chart_diagram__circle-chart-first" r="120" cx="50%" cy="50%"  stroke-dasharray="188.4 753.6"></circle>\n        <circle class="chart_diagram__circle-chart-second" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-188.4"></circle>\n        <circle class="chart_diagram__circle-chart-middle" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-376.8"></circle>\n        <circle class="chart_diagram__circle-chart-last" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-565.2"></circle>\n      </svg>\n      <div class="chart_diagram__circle-box">\n       <h3 class="chart_diagram__circle-title">${e}</h3>\n       <p class="chart_diagram__circle-result">${t}</p>\n      </div>\n    </div>\n  `})(a));const l=document.createElement("div");l.className="chart_diagram__info";const n=a.categories.map(((a,e)=>((a,e)=>{const{title:t,differenceText:i,valueText:s}=a;return`\n    <div class="chart_diagram__row">\n      <div class="chart_diagram__row-circle chart_diagram__row-circle_${e+1}"></div>\n      <div class="chart_diagram__row-counts">${t}</div>\n      <div class="chart_diagram__row-progress">${i.split(" ")[0]}</div>\n      <div class="chart_diagram__row-result">${s.split(" ")[0]}</div>\n    </div>\n  `})(a,e))).join("");l.insertAdjacentHTML("afterbegin",n),s.insertAdjacentHTML("beforeend",l.outerHTML);const r=document.createElement("div");return r.className="app__box",r.append(s),i.append(r),i.outerHTML})(this.data);case"activity":return i(this.data,this.orientation);default:console.error("Sorry, we are out of "+this.alias+".")}}}const l=JSON.parse('[{"alias":"leaders","data":{"title":"Больше всего коммитов","subtitle":"Спринт № 213","emoji":"👑","users":[{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"32"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"27"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"22"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"20"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"19"}]}},{"alias":"leaders","data":{"title":"Самый большой коммит","subtitle":"Спринт № 213","emoji":"😮","users":[{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"4001 строка"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"3845 строк"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"3640 строк"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"3453 строки"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"2852 строки"}]}},{"alias":"vote","data":{"title":"Самый 🔎 внимательный разработчик","subtitle":"Спринт № 213","emoji":"🔎","selectedUserId":4,"users":[{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"22 голоса"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"19 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"17 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"16 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"10 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"9 голосов"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"8 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"7 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"6 голосов"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"5 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"4 голоса"}]}},{"alias":"leaders","data":{"title":"Самый 🔎 внимательный разработчик","subtitle":"Спринт № 213","emoji":"🔎","selectedUserId":11,"users":[{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"22 голоса"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"19 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"17 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"16 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"15 голосов"},{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"14 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"12 голосов"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"9 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"8 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"6 голосов"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"5 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"4 голоса"}]}},{"alias":"vote","data":{"title":"Самый 👪 командный разработчик","subtitle":"Спринт № 213","emoji":"👪","offset":8,"users":[{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"24 голоса"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"21 голос"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"19 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"18 голосов"},{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"16 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"14 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"13 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"9 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"7 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"6 голосов"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"5 голосов"}]}},{"alias":"leaders","data":{"title":"Самый 👪 командный разработчик","subtitle":"Спринт № 213","emoji":"👪","selectedUserId":6,"users":[{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"24 голоса"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"21 голос"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"19 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"18 голосов"},{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"16 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"14 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"13 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"9 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"7 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"6 голосов"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"5 голосов"}]}},{"alias":"chart","data":{"title":"Коммиты","subtitle":"Спринт № 213","values":[{"title":"203","value":108},{"title":"204","value":160},{"title":"205","value":126},{"title":"206","value":134},{"title":"207","value":112},{"title":"208","value":152},{"title":"209","value":128},{"title":"210","value":164},{"title":"211","value":118},{"title":"212","value":140},{"title":"213","value":182,"active":true},{"title":"214","value":0},{"title":"215","value":0},{"title":"216","value":0},{"title":"217","value":0},{"title":"218","value":0}],"users":[{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"32"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"27"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"22"}]}},{"alias":"chart","data":{"title":"Строки кода","subtitle":"Спринт № 213","values":[{"title":"203","value":47798},{"title":"204","value":68590},{"title":"205","value":55472},{"title":"206","value":63073},{"title":"207","value":51917},{"title":"208","value":65852},{"title":"209","value":60693},{"title":"210","value":70631},{"title":"211","value":57299},{"title":"212","value":62839},{"title":"213","value":74156,"active":true},{"title":"214","value":0},{"title":"215","value":0},{"title":"216","value":0},{"title":"217","value":0},{"title":"218","value":0}],"users":[{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"8739"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"7538"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"6845"}]}},{"alias":"diagram","data":{"title":"Размер коммитов","subtitle":"Спринт № 213","totalText":"182 коммита","differenceText":"+42 с прошлого спринта","categories":[{"title":"> 1001 строки","valueText":"30 коммитов","differenceText":"+8 коммитов"},{"title":"501 — 1000 строк","valueText":"32 коммита","differenceText":"+6 коммитов"},{"title":"101 — 500 строк","valueText":"58 коммитов","differenceText":"+16 коммитов"},{"title":"1 — 100 строк","valueText":"62 коммита","differenceText":"+12 коммитов"}]}},{"alias":"activity","data":{"title":"Коммиты, 1 неделя","subtitle":"Спринт № 213","data":{"mon":[0,0,0,0,1,0,0,0,0,0,2,3,2,1,0,1,0,0,0,0,0,0,0,0],"tue":[0,0,0,0,1,0,0,0,0,5,0,4,0,0,0,0,1,0,3,0,0,2,1,0],"wed":[1,0,0,0,1,0,5,0,0,4,0,0,0,5,0,2,1,0,0,0,0,0,0,1],"thu":[0,1,0,1,0,0,0,0,6,0,1,0,0,1,0,0,5,0,0,0,1,0,0,0],"fri":[0,0,0,0,0,0,0,1,3,0,0,5,0,4,0,0,3,0,0,0,0,1,0,0],"sat":[0,0,0,0,2,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0],"sun":[0,0,0,0,0,0,0,1,0,0,0,0,3,1,0,0,0,0,0,0,1,0,0,0]}}},{"alias":"activity","data":{"title":"Коммиты, 2 неделя","subtitle":"Спринт № 213","data":{"mon":[0,1,1,1,0,0,0,0,0,4,0,0,2,0,0,0,0,1,0,0,0,2,0,2],"tue":[0,1,2,1,0,0,0,0,1,1,0,0,0,0,5,0,0,0,0,0,0,0,0,0],"wed":[0,0,0,0,2,0,1,2,0,3,0,0,0,0,0,0,0,0,0,3,1,1,0,0],"thu":[0,0,2,0,0,0,0,1,2,0,0,0,0,0,1,2,0,3,0,1,1,0,0,0],"fri":[0,0,0,1,1,0,2,0,4,0,0,0,2,0,3,2,0,0,0,0,1,1,0,1],"sat":[1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,2,2,0,2,0,0],"sun":[0,0,0,0,2,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1]}}}]'),n=new URL(window.location.href),r=parseInt(n.searchParams.get("slide"))>=1?parseInt(n.searchParams.get("slide"))-1:0,d=n.searchParams.get("theme")||null;d&&document.body.classList.add({light:"theme_light",dark:"theme_dark"}[d]),sessionStorage.setItem("theme",d||"dark"),sessionStorage.setItem("slideIndex",r.toString());const v=parseInt(sessionStorage.getItem("slideIndex")),{alias:c,data:u}=l[v];sessionStorage.setItem("data",JSON.stringify(u)),sessionStorage.setItem("alias",c),window.renderTemplate=(a,e)=>{const t=document.documentElement.clientWidth>document.documentElement.clientHeight?"landscape":"portrait";return new s(a,e,r,t).render()}})()})();