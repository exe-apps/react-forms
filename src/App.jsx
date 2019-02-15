import React, { Component } from 'react';
import './App.css';
import { Forms } from './components/forms';
import { Tables } from './components/tables';

class App extends Component {
  constructor(props) {  
    super(props);
    
    this.state = {
        usersList: [
          {
            name: 'Edubells',
            age: 25,
            occupation: 'Gardener'
          },
          {
            name: 'Thomasito',
            age: 24,
            occupation: 'Sky Diver'  
          },
          {
            name: 'Cisco',
            age: 23,
            occupation: 'Telephone Operator'  
          },
          {
            name: 'Acer',
            age: 22,
            occupation: 'Laptop'  
          },
        ],
        user: {
          name: '',
          age: '',
          occupation: ''
        }
    };

    //this.handleAddUser2 = this.handleAddUser2.bind(this);
  }

  handleChangeInfo = e => {
    const {name, value} = e.target;

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }

  handleAddUser = e => {

    let user = this.state.user;
    let usersList = [...this.state.usersList];

    usersList.push(user);

    this.setState({usersList : usersList});

    e.preventDefault();
  }

  handleAddUser2(e) {
    let user = this.state.user;
    let usersList = [...this.state.usersList];

    usersList.push(user);

    this.setState({usersList : usersList});

    e.preventDefault();
  }

  deleteUser = rowIndex => {

    let usersList = [...this.state.usersList];

    usersList.splice(rowIndex, 1);

    this.setState({usersList: usersList});
  }

  render() {

    return (
      <div className="App">

          <h1>FORMS APP</h1>

          <div className='forms-panel'>
            <Forms 
              handleChangeInfo={this.handleChangeInfo} 
              handleAddUser={this.handleAddUser} 
            />
          </div>
          
          <br/>

          <div className='table-panel'>
            <Tables usersList={this.state.usersList} deleteUser={this.deleteUser} />
          </div>
      </div>
    );
  }
}

export default App;
