import './App.css';
import { Component } from 'react';
import {HeaderComponent} from './Components/header/Headercomponent';
import { TileList } from './Components/TileList/TileListComponent';

class App extends Component{
  constructor(){
    super();
    this.state={
      searchField:"",
      users:[
        {
          id:1,
          name:"Shreejeet Praveen",
          sex:"male"
        },
        {
          id:2,
          name:"Manisha Golane",
          sex:"female"
        },
        {
          id:3,
          name:"Debdeep Goswami",
          sex:"male"
        },
        {
          id:4,
          name:"Balram Singh Rajput",
          sex:"male"
        },
        {
          id:5,
          name:"Shubham Rana",
          sex:"male"
        },
        {
          id:6,
          name:"Roshan Sourav",
          sex:"male"
        },
        {
          id:7,
          name:"Nitesh Rawal",
          sex:"male"
        }

      ]
    }
  }

  //componentDidMount(){
  //  fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(users1=>this.setState({users:users1}));
  //}
  
  render(){
    const {searchField,users}=this.state;
    const filteredUsers=users.filter(user=>user.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <HeaderComponent/>
        <input type="search" placeholder="Search users" onChange={e=>{this.setState({searchField:e.target.value})}}/>
        <TileList users={filteredUsers}/>
      </div>
    );
  }
}

export default App;

