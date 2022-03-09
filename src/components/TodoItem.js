import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>title</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <i className="fas fa-pen text-success"></i></span>  
            <span className="mx-2 text-success">
            <i className="fas fa-trash text-danger"></i></span> 
        </div>
      </li>
    )
  }
}
