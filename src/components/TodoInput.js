import React, { Component } from 'react';


export default class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
      <form className='d-flex flex-column'>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text  text-white">
              <i className="fas fa-book" />
              </div>
            </div>
            <input 
            type="text" 
            className="form-control text-capitalize"
             placeholder="Add a todo item"
              />
          </div>
          <button type="submit" className='btn btn-block add-item-btn mt-3 text-center '>Add Item</button>
     </form> 
     </div>








    
    );
  }
}
