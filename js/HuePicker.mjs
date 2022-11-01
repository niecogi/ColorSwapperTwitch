export class HuePicker {
  
  constructor(props) {
    this.id = props.id
    this.height = props.height
    this.min = props.min
    this.width = props.width
    this.max = props.max
    this.value = props.value
    this.parent = props.parent
    this.callback = props.callback
  }
  init() {
    let range = document.createElement("input")
    range.id = this.id
    range.type = "range"
    range.style.width = this.width
    range.style.height= this.height
    range.min = this.min
    range.max = this.max
    range.value = this.value
    range.onchange = () => this.callback(range.value)
    range.oninput = () => this.callback(range.value)
    this.parent.appendChild(range)

  }

}