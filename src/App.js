import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { v4 as uuid } from 'uuid';

class App extends Component {
  state = {
    items: [],
    item: '',
    editItem: false,
  };
  handleChange = (item) => {
    this.setState({
      item:item,
    });
  };
  handleSubmit = () => {
    this.setState((prevState) => ({
      items: [...prevState.items, { title: prevState.item, id: uuid() }],
    }));
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalized text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleItem={this.handleChange}
              submitItem={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
