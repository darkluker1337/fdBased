import { Component } from "../../core";
import './button.scss'

export class Button extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    };
  }


  plus(){
    this.setState((state)=>{
       return {
          ...state,
          count: state.count +=1
       } 
    })
  }

  minus(){
    this.setState((state)=>{
      return {
        ...state,
        count: state.count -=1
     } 
    })
  }
  

  registerEvents(){
    this.addEventListener('click', (evt)=>{
      if(evt.target.closest('.plus')){
        this.plus()
      }
      if(evt.target.closest('.minus')){
        this.minus()
      }
    })
  }



  render() {
    return `
     <button class='plus'>+</button>
     <span>${this.state.count}</span>
     <button class='minus'>-</button>
    `
  }
}


customElements.define('my-button', Button)



