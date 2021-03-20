import templateHead from './templateHead'
import {createElement, formatClock} from '../functions/functions'

const mapLegend = new Map()
mapLegend.set([0], 'min')
mapLegend.set([1, 2], 'mid')
mapLegend.set([3, 4], 'max')
mapLegend.set([5, 6], 'extra')

const createCube = (selector) => {
	const cube = createElement(selector, 'div')
	return cube
}

const getTypeCube = (num) => {
	let type = ''

	if(num === 0){
		return type = 'min'
	}

	mapLegend.forEach((val, key) => {
		const [begin, end] = key

		if(num >= begin && num <= end){
			type = val
		}
	})

	return type
}

const drawCanvas = (data, orientation) => {
	const activity = createElement(`activity activity_${orientation}`, 'div')
	const { data: weeks } = data
	const days = Object.values(weeks)

	days.map((day) => {
		const hours = orientation === 'landscape' ? 2 : 1
		let formatTwelve = formatClock(day, hours)
		const element = createElement(`activity__box_${orientation}`, 'div')
		activity.append(element)

		formatTwelve.map((hour) => {
			const type = getTypeCube(hour)
			element.append(createCube(`activity__cube activity__cube_${orientation} activity__cube_${orientation}_${type}`))
		})
	})

	return activity
}

const templateLegend = (count) => {
	const legendRow = createElement('legend__row','div')

	const legendItem = (text) => {
		const legend__item = createElement('legend__item','div')
		const item__box = createElement('legend__item-box', 'div')
		const gap = createElement('legend__item-text-gap', 'div', text)

		legend__item.append(item__box)
		legend__item.append(gap)

		return legend__item
	}

	legendRow.append(legendItem(count))

	mapLegend.forEach((val, key, ) => {
		const legendEl = legendItem(key.join(' — '))
		legendRow.append(legendEl)
	})

	return legendRow.outerHTML
}


export default (item, orientation) => {
	const hours = orientation === 'landscape' ? '2 часа' : '1 час'

	const htmlHead = templateHead(item)

	const appBox = createElement('app__box', 'div' )
	appBox.append(drawCanvas(item, orientation))

	const legend = createElement('activity__legend', 'div')
	legend.innerHTML = templateLegend(hours)

	appBox.append(legend)

	const app = createElement('app', 'div')

	app.append(htmlHead)
	app.append(appBox)

	return app.outerHTML
}

