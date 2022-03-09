import React, { Component } from 'react';

export default class TodoInput extends Component {
  constructor(props) {
    super(props)

  }
  handleChange = (e)=>{
    const {handleItem} = this.props
    handleItem(e.target.value)
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    const {submitItem} = this.props
    submitItem()
    console.log("kudghacsgu")
  }
  render() {
    // console.log(this.props)
    return (
      <div className="card card-body my-3">
      <form className='d-flex flex-column' onSubmit={this.handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text text-white">
              <i className="fas fa-book" />
              </div>
            </div>
            <input 
            type="text" 
            className="form-control text-capitalize"
             placeholder="Add a todo item"
             value={this.props.item}
             onChange={this.handleChange}
             
             />
          </div>
          <button
          type="submit"           
           className='btn btn-block add-item-btn mt-3 text-center'
           >Add Item</button>
          
             
     </form> 
     </div>








    
    );
  }
}
