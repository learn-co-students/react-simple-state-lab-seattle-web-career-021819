import React, { Component } from 'react';

class Cell extends Component {
     constructor(props){
          super(props)
          this.state={
               color: this.props.value
          }
          this.clickChange=this.clickChange.bind(this)

     }

     clickChange(){
          console.log("TEST")
          this.setState({color: '#333'})
     }

     render(){
          return(
               <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.clickChange}>
               </div>
          )

     }

}

export default Cell;