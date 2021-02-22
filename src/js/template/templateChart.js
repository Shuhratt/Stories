
const templateChartHtml = (data) => {
  return `
    <div class="chart_col">
      <div class="chart_col-count">${data.title}</div>
      <div class="chart_col-box"></div>
      <div class="chart_col-num">${data.value}</div>
    </div>
  `
}

const templateChartUser = (data) => {
  return `
  <div class="chart__users-el">
    <div class="chart__users-el-avatar">
      <img class="chart__users-el-avatar-img" src="images/2x/${data.avatar}"  alt="${data.name}" srcset="images/2x/${data.avatar} 1x, images/4x/${data.avatar} 2x">
    </div>
    <div class="chart__users-el-info">
      <div class="chart__users-el-name">${data.name}</div>
      <div class="chart__users-el-num">${data.valueText}</div>
    </div>
  </div>
  `
}



export default (item) => {

  const htmlHead = `
    <h1 class="app__title">${item.title}</h1>
    <h2 class="app__subtitle">${item.subtitle}</h2>
  `
  const chartBox = document.createElement('div')
  chartBox.className = 'chart__box';

  const userList = document.createElement('div')
  userList.className = 'chart__users'

  const chartHtml = item.values.map((col) => templateChartHtml(col))
  chartBox.innerHTML = chartHtml.join('').trim()

  const chartUsersHtml = item.users.map((user) => templateChartUser(user))
  userList.innerHTML = chartUsersHtml.join('').trim()

  return htmlHead + chartBox.outerHTML + userList.outerHTML

}