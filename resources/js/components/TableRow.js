import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.obj.id}
        </td>
        <td>
          {this.props.obj.title}
        </td>
        <td>
          {this.props.obj.description}
        </td>
        <td> 
        </td>
        <td> 
        </td>
      </tr>
    )
  }
}

export default TableRow;