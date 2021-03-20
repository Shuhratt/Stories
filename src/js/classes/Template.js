import templateLeaders from '../template/templateLeaders'
import templateChart from '../template/templateChart'
import templateDiagram from '../template/templateDiagram'
import templateActivity from '../template/templateActivity'
import templateVote from '../template/templateVote'


export default class Template {
	/**
   * @param alias
   * @param data
   * @param index
   * @param orientation
   */

	constructor(alias, data, index, orientation = 'landscape') {
		this.alias = alias
		this.data = data
		this.index = index
		this.orientation = orientation
	}

	render() {
		let html = ''

		switch(this.alias) {
		case 'leaders':
			html = templateLeaders(this.data, this.index)
			break

		case 'vote':
			html = templateVote(this.data, this.orientation)
			break

		case 'chart':
			html = templateChart(this.data, this.orientation)
			break

		case 'diagram':
			html = templateDiagram(this.data)
			break

		case 'activity':
			html = templateActivity(this.data, this.orientation)
			break

		default:
			console.error('Sorry, we are out of ' + this.alias + '.')
		}

		return html

	}



}