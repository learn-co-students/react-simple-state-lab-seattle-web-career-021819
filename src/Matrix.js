import React, { Component } from 'react';
import Cell from './Cell';
import { defaultPattern } from './data';

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map((val, i) => <Cell key={i} value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map((rowVals, i) => <div key={i} className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: defaultPattern
}
