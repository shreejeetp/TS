import './App.css';
import { Component } from 'react';
import {HeaderComponent} from './Components/header/Headercomponent';
import { TileList } from './Components/TileList/TileListComponent';

class App extends Component{
  constructor(){
    super();
    this.state={
      users:[
        {
          id:1,
          name:"Shreejeet Praveen"
        },
        {
          id:2,
          name:"Manisha Golane"
        },
        {
          id:3,
          name:"Debdeep Goswami"
        },
        {
          id:4,
          name:"Balram Singh Rajput"
        },
        {
          id:5,
          name:"Shubham Rana"
        },
        {
          id:6,
          name:"Roshan Sourav"
        },
        {
          id:7,
          name:"Nitesh Rawal"
        }

      ]
    }
  }

  //componentDidMount(){
  //  fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(users1=>this.setState({users:users1}));
  //}
  
  render(){
    return(
      <div className="App">
        <HeaderComponent/>
        <TileList users={this.state.users}/>
      </div>
    );
  }
}

export default App;

