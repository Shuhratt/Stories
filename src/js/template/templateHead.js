import {createElement} from '../functions/functions'

export default (data) => {
	const { title, subtitle } = data
	const app__header = createElement('app__header', 'div')
	const h1 = createElement('app__title', 'h1', title)
	const h2 = createElement('app__subtitle','h2', subtitle)

	app__header.append(h1)
	app__header.append(h2)

	return app__header
}