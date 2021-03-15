(()=>{"use strict";(()=>{const e=e=>{const a=document.createElement("div");a.className="app__header";const t=document.createElement("h1");t.className="app__title",t.textContent=e.title,a.append(t);const i=document.createElement("h2");return i.className="app__subtitle",i.textContent=e.subtitle,a.append(i),a},a=new Map;a.set([0],"min"),a.set([1,2],"mid"),a.set([3,4],"max"),a.set([5,6],"extra");const t=(t,i)=>{const s="landscape"===i?"2 часа":"1 час",n=e(t),l=document.createElement("div");l.className="app__box",l.append(((e,t)=>{const i=document.createElement("div"),s=Object.values(e.data);return i.className=`activity activity_${t}`,s.map((e=>{let s=((e,a)=>{let t=0,i=a;return e.reduce(((e,s,n,l)=>{const r=l.slice(t,i);if(r.length>0){const s=r.reduce(((e,a)=>e+a),0);e.push(s),t+=a,i+=a}return e}),[])})(e,"landscape"===t?2:1);const n=(e=>{const a=document.createElement("div");return a.className=e,a})(`activity__box_${t}`);i.append(n),s.map((e=>{const i=(e=>{let t="";return 0===e?t="min":(a.forEach(((a,i)=>{const[s,n]=i;e>=s&&e<=n&&(t=a)})),t)})(e);n.append((e=>{const a=document.createElement("div");return a.className=e,a})(`activity__cube activity__cube_${t} activity__cube_${t}_${i}`))}))})),i})(t,i));const r=document.createElement("div");r.className="activity__legend";const c=(e=>{const t=document.createElement("div");t.className="legend__row";const i=e=>{const a=document.createElement("div");a.className="legend__item";const t=document.createElement("div");t.className="legend__item-box";const i=document.createElement("div");return i.className="legend__item-text-gap",i.textContent=e,a.append(t),a.append(i),a};return t.append(i(e)),a.forEach(((e,a)=>{const s=i(a.join("-"));t.append(s)})),t.outerHTML})(s);r.innerHTML=c,l.append(r);const d=document.createElement("div");return d.className="app",d.append(n),d.append(l),d.outerHTML};class i{constructor(e,a,t,i="landscape"){this.alias=e,this.data=a,this.index=t,this.orientation=i}render(){switch(this.alias){case"leaders":return(a=>{const t=e(a),i=document.createElement("div");i.className="app__box";const s=document.createElement("div");s.className="leaders__list";const n=a.users.slice(0,5).map(((e,t)=>((e,a,t,i)=>{const[s,n]=e.name.split(" ");return`\n    <div class="leaders__list-item">\n      <div class="leaders__list-item-box">\n        <div class="leaders__list-item-emoji">${i+1===1?a:"👍"}</div>\n        <div class="leaders__list-item-avatar">\n          <img class="leaders__list-item-avatar-img" src="images/2x/${e.avatar}"  alt="${e.name}" srcset="images/2x/${e.avatar} 1x, images/4x/${e.avatar} 2x" />\n        </div>\n        <div class="leaders__list-item-name">\n          <span>${s}</span>  \n          <span>${n}</span>\n        </div>\n        <div class="leaders__list-item-count">${e.valueText}</div>\n      </div>\n      <div class="leaders__list-item-place">\n        <span class="leaders__list-item-place-num">${i+1}</span>\n      </div>\n    </div>\n  `})(e,a.emoji,0,t))).join("");s.innerHTML=n,i.append(s);const l=document.createElement("div");return l.className="app",l.append(t),l.append(i),l.outerHTML})(this.data,this.index);case"vote":return((a,t)=>{const i=e(a),s=document.createElement("div");s.className="app";const n=document.createElement("div");n.className="app__box app__box_grid";const l=a.users.slice(0,8).map(((e,a)=>((e,a="")=>{const[t,i]=e.name.split(" ");return`\n    <div class="vote__item ${a}" data-params="" data-id="${e.id}">\n      <div class="vote__item-avatar">\n        <img class="vote__item-avatar-img" src="images/2x/${e.avatar}"  alt="${e.name}" srcset="images/2x/${e.avatar} 1x,\n        images/4x/${e.avatar} 2x" />\n      </div>\n      <div class="vote__item-name">\n        <span>${t}</span>  \n        <span>${i}</span>\n      </div>\n    </div>\n    `})(e,`vote__item-${a+1}${1===a?" active":""}`))).join("").concat('\n    <div class="vote__buttons">\n      <div class="vote__buttons-el"data-action="update">\n        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path class="vote__buttons-el-path" fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"/>\n        </svg>\n      </div> \n      <div class="vote__buttons-el" data-action="update">\n        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path class="vote__buttons-el-path active" fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"/>\n        </svg>\n     </div>\n  </div>\n  ');return n.innerHTML=l,s.append(i),s.append(n),s.outerHTML})(this.data,this.orientation);case"chart":return((a,t)=>{const i=e(a),s=document.createElement("div");s.className="chart__box";const n=Math.max.apply(null,a.values.map((e=>e.value))),l=document.documentElement.clientHeight,r=a.values.slice(-10,-1).map((e=>((e,a,t,i)=>{const s={landscape:117/t,portrait:270/t},n=Math.floor(e.value*s[a])/i*100;return`\n    <div class="chart_col">\n      <div class="chart_col-count">${e.value}</div>\n      <div class="chart_col-box" style="height: ${n}vh"></div>\n      <div class="chart_col-num">${e.title}</div>\n    </div>\n  `})(e,t,n,l))).join("");s.innerHTML=r;const c=document.createElement("div");c.className="chart__users";const d=a.users.slice(0,2).map((e=>(e=>`\n    <div class="chart__users-el">\n      <div class="chart__users-el-avatar">\n        <img class="chart__users-el-avatar-img" src="images/2x/${e.avatar}"  alt="${e.name}" srcset="images/2x/${e.avatar} 1x, images/4x/${e.avatar} 2x">\n      </div>\n      <div class="chart__users-el-info">\n        <div class="chart__users-el-name">${e.name}</div>\n        <div class="chart__users-el-num">${e.valueText}</div>\n      </div>\n    </div>\n  `)(e))).join("");c.innerHTML=d;const v=document.createElement("div");v.className="app";const m=document.createElement("div");return m.className="app__box",v.append(i),m.append(s),m.append(c),v.append(m),v.outerHTML})(this.data,this.orientation);case"diagram":return(a=>{const t=e(a),i=document.createElement("div");i.className="app",i.append(t);const s=document.createElement("div");s.className="chart_diagram",s.insertAdjacentHTML("afterbegin",(e=>`\n    <div class="chart_diagram__circle">\n      <svg class="chart_diagram__circle-chart" width="240" height="240" viewBox="0 0 285 285">\n        <circle class="chart_diagram__circle-chart-first" r="120" cx="50%" cy="50%"  stroke-dasharray="188.4 753.6"></circle>\n        <circle class="chart_diagram__circle-chart-second" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-188.4"></circle>\n        <circle class="chart_diagram__circle-chart-middle" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-376.8"></circle>\n        <circle class="chart_diagram__circle-chart-last" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-565.2"></circle>\n      </svg>\n      <div class="chart_diagram__circle-box">\n       <h3 class="chart_diagram__circle-title">${e.totalText}</h3>\n       <p class="chart_diagram__circle-result">${e.differenceText}</p>\n      </div>\n    </div>\n  `)(a));const n=document.createElement("div");n.className="chart_diagram__info";const l=a.categories.map(((e,a)=>((e,a)=>`\n    <div class="chart_diagram__row">\n      <div class="chart_diagram__row-circle chart_diagram__row-circle_${a+=1}"></div>\n      <div class="chart_diagram__row-counts">${e.title}</div>\n      <div class="chart_diagram__row-progress">${e.differenceText.split(" ")[0]}</div>\n      <div class="chart_diagram__row-result">${e.valueText.split(" ")[0]}</div>\n    </div>\n  `)(e,a))).join("");n.insertAdjacentHTML("afterbegin",l),s.insertAdjacentHTML("beforeend",n.outerHTML);const r=document.createElement("div");return r.className="app__box",r.append(s),i.append(r),i.outerHTML})(this.data);case"activity":return t(this.data,this.orientation);default:console.error("Sorry, we are out of "+this.alias+".")}}}const s=JSON.parse('[{"alias":"leaders","data":{"title":"Больше всего коммитов","subtitle":"Спринт № 213","emoji":"👑","users":[{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"32"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"27"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"22"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"20"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"19"}]}},{"alias":"leaders","data":{"title":"Самый большой коммит","subtitle":"Спринт № 213","emoji":"😮","users":[{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"4001 строка"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"3845 строк"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"3640 строк"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"3453 строки"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"2852 строки"}]}},{"alias":"vote","data":{"title":"Самый 🔎 внимательный разработчик","subtitle":"Спринт № 213","emoji":"🔎","selectedUserId":4,"users":[{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"22 голоса"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"19 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"17 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"16 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"10 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"9 голосов"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"8 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"7 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"6 голосов"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"5 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"4 голоса"}]}},{"alias":"leaders","data":{"title":"Самый 🔎 внимательный разработчик","subtitle":"Спринт № 213","emoji":"🔎","selectedUserId":11,"users":[{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"22 голоса"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"19 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"17 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"16 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"15 голосов"},{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"14 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"12 голосов"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"9 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"8 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"6 голосов"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"5 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"4 голоса"}]}},{"alias":"vote","data":{"title":"Самый 👪 командный разработчик","subtitle":"Спринт № 213","emoji":"👪","offset":8,"users":[{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"24 голоса"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"21 голос"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"19 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"18 голосов"},{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"16 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"14 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"13 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"9 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"7 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"6 голосов"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"5 голосов"}]}},{"alias":"leaders","data":{"title":"Самый 👪 командный разработчик","subtitle":"Спринт № 213","emoji":"👪","selectedUserId":6,"users":[{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"24 голоса"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"21 голос"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"19 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"18 голосов"},{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"16 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"14 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"13 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"9 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"7 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"6 голосов"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"5 голосов"}]}},{"alias":"chart","data":{"title":"Коммиты","subtitle":"Спринт № 213","values":[{"title":"203","value":108},{"title":"204","value":160},{"title":"205","value":126},{"title":"206","value":134},{"title":"207","value":112},{"title":"208","value":152},{"title":"209","value":128},{"title":"210","value":164},{"title":"211","value":118},{"title":"212","value":140},{"title":"213","value":182,"active":true},{"title":"214","value":0},{"title":"215","value":0},{"title":"216","value":0},{"title":"217","value":0},{"title":"218","value":0}],"users":[{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"32"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"27"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"22"}]}},{"alias":"chart","data":{"title":"Строки кода","subtitle":"Спринт № 213","values":[{"title":"203","value":47798},{"title":"204","value":68590},{"title":"205","value":55472},{"title":"206","value":63073},{"title":"207","value":51917},{"title":"208","value":65852},{"title":"209","value":60693},{"title":"210","value":70631},{"title":"211","value":57299},{"title":"212","value":62839},{"title":"213","value":74156,"active":true},{"title":"214","value":0},{"title":"215","value":0},{"title":"216","value":0},{"title":"217","value":0},{"title":"218","value":0}],"users":[{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"8739"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"7538"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"6845"}]}},{"alias":"diagram","data":{"title":"Размер коммитов","subtitle":"Спринт № 213","totalText":"182 коммита","differenceText":"+42 с прошлого спринта","categories":[{"title":"> 1001 строки","valueText":"30 коммитов","differenceText":"+8 коммитов"},{"title":"501 — 1000 строк","valueText":"32 коммита","differenceText":"+6 коммитов"},{"title":"101 — 500 строк","valueText":"58 коммитов","differenceText":"+16 коммитов"},{"title":"1 — 100 строк","valueText":"62 коммита","differenceText":"+12 коммитов"}]}},{"alias":"activity","data":{"title":"Коммиты, 1 неделя","subtitle":"Спринт № 213","data":{"mon":[0,0,0,0,1,0,0,0,0,0,2,3,2,1,0,1,0,0,0,0,0,0,0,0],"tue":[0,0,0,0,1,0,0,0,0,5,0,4,0,0,0,0,1,0,3,0,0,2,1,0],"wed":[1,0,0,0,1,0,5,0,0,4,0,0,0,5,0,2,1,0,0,0,0,0,0,1],"thu":[0,1,0,1,0,0,0,0,6,0,1,0,0,1,0,0,5,0,0,0,1,0,0,0],"fri":[0,0,0,0,0,0,0,1,3,0,0,5,0,4,0,0,3,0,0,0,0,1,0,0],"sat":[0,0,0,0,2,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0],"sun":[0,0,0,0,0,0,0,1,0,0,0,0,3,1,0,0,0,0,0,0,1,0,0,0]}}},{"alias":"activity","data":{"title":"Коммиты, 2 неделя","subtitle":"Спринт № 213","data":{"mon":[0,1,1,1,0,0,0,0,0,4,0,0,2,0,0,0,0,1,0,0,0,2,0,2],"tue":[0,1,2,1,0,0,0,0,1,1,0,0,0,0,5,0,0,0,0,0,0,0,0,0],"wed":[0,0,0,0,2,0,1,2,0,3,0,0,0,0,0,0,0,0,0,3,1,1,0,0],"thu":[0,0,2,0,0,0,0,1,2,0,0,0,0,0,1,2,0,3,0,1,1,0,0,0],"fri":[0,0,0,1,1,0,2,0,4,0,0,0,2,0,3,2,0,0,0,0,1,1,0,1],"sat":[1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,2,2,0,2,0,0],"sun":[0,0,0,0,2,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1]}}}]'),n=new URL(window.location.href),l=parseInt(n.searchParams.get("slide"))>=1?parseInt(n.searchParams.get("slide"))-1:0,r=n.searchParams.get("theme")||null;r&&document.body.classList.add({light:"theme_light",dark:"theme_dark"}[r]),sessionStorage.setItem("theme",r||"dark"),sessionStorage.setItem("slideIndex",l.toString());const c=parseInt(sessionStorage.getItem("slideIndex")),{alias:d,data:v}=s[c];sessionStorage.setItem("data",JSON.stringify(v)),sessionStorage.setItem("alias",d),window.renderTemplate=(e,a)=>{const t=document.documentElement.clientWidth>document.documentElement.clientHeight?"landscape":"portrait";return new i(e,a,l,t).render()}})()})();