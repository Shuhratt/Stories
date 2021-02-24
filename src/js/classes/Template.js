import templateLeaders from "../template/templateLeaders";
import templateChart from "../template/templateChart";
import templateDiagram from "../template/templateDiagram";


export default class Template {

  constructor(alias, data, index, orientation = 'landscape') {
    this.alias = alias
    this.data = data
    this.index = index
    this.orientation = orientation
  }

  reload() {

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
        return templateChart(this.data, this.orientation);
      break;

      case 'diagram':
        console.log('diagram')
        return templateDiagram(this.data)
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