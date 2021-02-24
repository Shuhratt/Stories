import templateLeaders from "../template/templateLeaders";
import templateChart from "../template/templateChart";


export default class Template {

  constructor(alias, data, index, orientation = 'landscape') {
    this.alias = alias
    this.data = data
    this.index = index
    this.orientation = orientation
  }

  reload() {
    return new Template(this.alias, this.data, this.index, this.orientation)
  }

  render() {

    switch(this.alias) {
      case 'leaders':
        console.log('leaders')
        return templateLeaders(this.data, this.index)
      break;

      case 'vote':
        console.log('vote')
        console.error('Шаблона нет')
      break;

      case 'chart':
        console.log('chart')

        return templateChart(this.data, 'horizontal');
      break;

      case 'diagram':
        console.log('diagram')
        console.error('Шаблона нет')
      break;

      case 'activity':
        console.log('activity')
        console.error('Шаблона нет')
      break;

      default:
        console.log("Sorry, we are out of " + this.alias + ".");

    }

  }



}