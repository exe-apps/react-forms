import React, { Component } from 'react';
import './App.css';

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
          }
        ],
        user: {
          name: '',
          age: '',
          occupation: ''
        }
    };

    this.handleChangeInfo = this.handleChangeInfo.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
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
    let usersList = this.state.usersList;

    usersList.push(user);

    this.setState(usersList);

    e.preventDefault();
  }

  render() {
    let usersList = this.state.usersList;

    return (
      <div className="App">

          <h1>FORMS APP</h1>

          <div className='table-panel'>
            <table className='user-table'>
              <tr className='user-table-row'>
                  <th className='user-table-cell'>NAME</th>
                  <th className='user-table-cell'>AGE</th>
                  <th className='user-table-cell'>OCCUPATION</th>
              </tr>
              {
                usersList.map(user =>{
                    return (
                      <tr className='user-table-row'>
                          <th className='user-table-cell'>{user.name}</th>
                          <th className='user-table-cell'>{user.age}</th>
                          <th className='user-table-cell'>{user.occupation}</th>
                      </tr>
                    )
                })
              }
            </table>
          </div>
          
          <div className='forms-panel'>
            <form>
              Name: <br/> <input type="text" name="name" placeholder="Name" onChange={this.handleChangeInfo} /><br/>
              Age: <br/> <input type="text" name="age" placeholder="Age" onChange={this.handleChangeInfo} /><br/>
              Occupation: <br/> <input type="text" name="occupation" placeholder="Occupation" onChange={this.handleChangeInfo} /><br/>
              <br/>
              <button type="button" onClick={this.handleAddUser}>Add</button>
            </form>
          </div>
      </div>
    );
  }
}

export default App;
