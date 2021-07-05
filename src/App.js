import './App.css';
import PostTab from './Components/PostTab/PostTab';
import { Component } from 'react';
import PostControl from './Components/PostControl/PostControl';
import VerifyTab from './Components/VerifyTab/VerifyTab';

class App extends Component{
  constructor(){
    super()
    this.state={
      no_of_post:1,
      post:[{
        id:0,
        author:"Shreejeet Praveen",
        content:"First Post",
        verified:true
      }
      ]
    }

  }
  render(){
    const posts=this.state.post;
    return(
      <div>
        <PostTab className="postTab" posts={posts}/>
        <VerifyTab className="verifyTab" posts={posts}/>
        <PostControl/>
      </div>
    );
  }
}

export default App;
