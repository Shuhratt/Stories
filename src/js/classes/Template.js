import templateLeaders from "../template/templateLeaders";

export default class Template {

  constructor(alias, data, index) {
    this.alias = alias
    this.data = data
    this.index = index
  }

  render() {

    switch(this.alias) {
      case 'leaders':
        return templateLeaders(this.data, this.index)
      break;

      case 'vote':
        console.error('Шаблона нет')
      break;

      case 'chart':
        console.error('Шаблона нет')
      break;

      case 'diagram':
        console.error('Шаблона нет')
      break;

      case 'activity':
        console.error('Шаблона нет')
      break;

      default:
        console.log("Sorry, we are out of " + this.alias + ".");

    }

  }



}