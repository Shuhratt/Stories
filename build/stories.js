(()=>{"use strict";const e=e=>{const a=document.createElement("div");a.className="app__header";const t=document.createElement("h1");t.className="app__title",t.textContent=e.title,a.append(t);const s=document.createElement("h2");return s.className="app__subtitle",s.textContent=e.subtitle,a.append(s),a},a=new Map;a.set([0],"min"),a.set([1,2],"mid"),a.set([3,4],"max"),a.set([5,6],"extra");const t=(t,s)=>{const n="landscape"===s?"2 часа":"1 час",c=e(t),r=document.createElement("div");r.className="app__box",r.append(((e,t)=>{const s=document.createElement("div"),n=Object.values(e.data);return s.className=`activity activity_${t}`,n.map((e=>{let n=((e,a)=>{let t=0,s=a;return e.reduce(((e,n,c,r)=>{const i=r.slice(t,s);if(i.length>0){const n=i.reduce(((e,a)=>e+a),0);e.push(n),t+=a,s+=a}return e}),[])})(e,"landscape"===t?2:1);const c=(e=>{const a=document.createElement("div");return a.className=e,a})(`activity__box_${t}`);s.append(c),n.map((e=>{const s=(e=>{let t="";return 0===e?t="min":(a.forEach(((a,s)=>{const[n,c]=s;e>=n&&e<=c&&(t=a)})),t)})(e);c.append((e=>{const a=document.createElement("div");return a.className=e,a})(`activity__cube activity__cube_${t} activity__cube_${t}_${s}`))}))})),s})(t,s));const i=document.createElement("div");i.className="activity__legend";const d=(e=>{const t=document.createElement("div");t.className="legend__row";const s=e=>{const a=document.createElement("div");a.className="legend__item";const t=document.createElement("div");t.className="legend__item-box";const s=document.createElement("div");return s.className="legend__item-text-gap",s.textContent=e,a.append(t),a.append(s),a};return t.append(s(e)),a.forEach(((e,a)=>{const n=s(a.join("-"));t.append(n)})),t.outerHTML})(n);i.innerHTML=d,r.append(i);const l=document.createElement("div");return l.className="app",l.append(c),l.append(r),l.outerHTML};class s{constructor(e,a,t,s="landscape"){this.alias=e,this.data=a,this.index=t,this.orientation=s}render(){switch(this.alias){case"leaders":return console.log("leaders"),((a,t)=>{const s=e(a),n=document.createElement("div");n.className="app__box";const c=document.createElement("div");c.className="leaders__list";const r=a.users.slice(0,5).map(((e,t)=>((e,a,t,s)=>`\n    <div class="leaders__list-item">\n      <div class="leaders__list-item-avatar">\n        <img class="leaders__list-item-avatar-img" src="images/2x/${e.avatar}"  alt="${e.name}" srcset="images/2x/${e.avatar} 1x,\n        images/4x/${e.avatar} 2x" />\n        <div class="leaders__list-item-emoji">${s+1===1?a:"👍"}</div>\n      </div>\n      <div class="leaders__list-item-name">${e.name}</div>\n      <div class="leaders__list-item-count">${e.valueText}</div>\n      <div class="leaders__list-item-place">\n        <span class="leaders__list-item-place-num">${s+1}</span>\n      </div>\n    </div>\n  `)(e,a.emoji,0,t))).join("");c.innerHTML=r,n.append(c);const i=document.createElement("div");return i.className="app",i.append(s),i.append(n),i.outerHTML})(this.data,this.index);case"vote":return console.log("vote"),((a,t)=>{const s=e(a),[n,c,...r]=a.users,i=document.createElement("div");i.className="app";const d=document.createElement("div");d.className="app__box";const l=document.createElement("div");var o;return l.className="vote__col",l.innerHTML=`\n    <div class="vote__item">\n      <div class="vote__item-avatar">\n        <img class="leaders__list-item-avatar-img" src="images/2x/${(o=n).avatar}"  alt="${o.name}" srcset="images/2x/${o.avatar} 1x,\n        images/4x/${o.avatar} 2x" />\n      </div>\n      <div class="vote__item-name">${o.name}</div>\n    </div>\n    `,d.append(l),i.append(s),i.append(d),i.outerHTML})(this.data,this.orientation);case"chart":return console.log("chart"),((a,t)=>{const s=e(a),n=document.createElement("div");n.className="chart__box";const c=Math.max.apply(null,a.values.map((e=>e.value))),r=document.documentElement.clientHeight,i=a.values.slice(-10,-1).map((e=>((e,a,t,s)=>{const n={landscape:117/t,portrait:270/t},c=Math.floor(e.value*n[a])/s*100;return`\n    <div class="chart_col">\n      <div class="chart_col-count">${e.value}</div>\n      <div class="chart_col-box" style="height: ${c}vh"></div>\n      <div class="chart_col-num">${e.title}</div>\n    </div>\n  `})(e,t,c,r))).join("");n.innerHTML=i;const d=document.createElement("div");d.className="chart__users";const l=a.users.slice(0,2).map((e=>{return`\n    <div class="chart__users-el">\n      <div class="chart__users-el-avatar">\n        <img class="chart__users-el-avatar-img" src="images/2x/${(a=e).avatar}"  alt="${a.name}" srcset="images/2x/${a.avatar} 1x, images/4x/${a.avatar} 2x">\n      </div>\n      <div class="chart__users-el-info">\n        <div class="chart__users-el-name">${a.name}</div>\n        <div class="chart__users-el-num">${a.valueText}</div>\n      </div>\n    </div>\n  `;var a})).join("");d.innerHTML=l;const o=document.createElement("div");o.className="app";const m=document.createElement("div");return m.className="app__box",o.append(s),m.append(n),m.append(d),o.append(m),o.outerHTML})(this.data,this.orientation);case"diagram":return console.log("diagram"),(a=>{const t=e(a),s=document.createElement("div");s.className="app",s.append(t);const n=document.createElement("div");var c;n.className="chart_diagram",n.insertAdjacentHTML("afterbegin",`\n    <div class="chart_diagram__circle">\n      <svg class="chart_diagram__circle-chart" width="240" height="240" viewBox="0 0 285 285">\n        <circle class="chart_diagram__circle-chart-first" r="120" cx="50%" cy="50%"  stroke-dasharray="188.4 753.6"></circle>\n        <circle class="chart_diagram__circle-chart-second" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-188.4"></circle>\n        <circle class="chart_diagram__circle-chart-middle" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-376.8"></circle>\n        <circle class="chart_diagram__circle-chart-last" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-565.2"></circle>\n      </svg>\n      <div class="chart_diagram__circle-box">\n       <h3 class="chart_diagram__circle-title">${(c=a).totalText}</h3>\n       <p class="chart_diagram__circle-result">${c.differenceText}</p>\n      </div>\n    </div>\n  `);const r=document.createElement("div");r.className="chart_diagram__info";const i=a.categories.map(((e,a)=>((e,a)=>`\n    <div class="chart_diagram__row">\n      <div class="chart_diagram__row-circle chart_diagram__row-circle_${a+=1}"></div>\n      <div class="chart_diagram__row-counts">${e.title}</div>\n      <div class="chart_diagram__row-progress">${e.differenceText.split(" ")[0]}</div>\n      <div class="chart_diagram__row-result">${e.valueText.split(" ")[0]}</div>\n    </div>\n  `)(e,a))).join("");r.insertAdjacentHTML("afterbegin",i),n.insertAdjacentHTML("beforeend",r.outerHTML);const d=document.createElement("div");return d.className="app__box",d.append(n),s.append(d),s.outerHTML})(this.data);case"activity":return console.log("activity"),t(this.data,this.orientation);default:console.log("Sorry, we are out of "+this.alias+".")}}}const n=new URL(window.location.href),c=parseInt(n.searchParams.get("slide"))>=1?parseInt(n.searchParams.get("slide"))-1:0,r=n.searchParams.get("theme")||null;sessionStorage.setItem("theme",r||"dark"),r&&document.body.classList.add({light:"theme_light",dark:"theme_dark"}[r]),window.renderTemplate=(e,a)=>{const t=document.documentElement.clientWidth>document.documentElement.clientHeight?"landscape":"portrait";return console.log(c),console.log(t),console.log(sessionStorage.getItem("theme")),new s(e,a,c,t).render()},window.addEventListener("load",(async()=>{await(async()=>{try{const e=await fetch("/data.json"),a=await e.json(),t=a[c].alias,s=a[c].data,n=renderTemplate(t,s);document.body.innerHTML=n,window.addEventListener("resize",(e=>{document.body.innerHTML="";const a=renderTemplate(t,s);setTimeout((()=>{document.body.innerHTML=a}),100)}))}catch(e){console.error("Ошибка: "+e)}})()}))})();