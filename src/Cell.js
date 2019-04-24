import React, {Component} from 'react';

export default class Cell extends React.Component{

  constructor(props){
    super(props)
    this.state = {color: this.props.value}
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
    this.setState({
      color: '#333'
    })
  }

  render(){
    return <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.clickHandler} >

    </div>
  }
}
