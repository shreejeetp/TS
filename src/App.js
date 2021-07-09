import './App.css';
import PostTab from './Components/PostTab/PostTab';
import { Component } from 'react';
import PostControl from './Components/PostControl/PostControl';
import VerifyTab from './Components/VerifyTab/VerifyTab';
import ToastNotification from './Components/ToastNotification/ToastNotification';

class App extends Component{
  constructor(){
    super()
    this.state={
      no_of_post:1,
      id_counter:1,
      posts:[{
        id:0,
        author:"Shreejeet Praveen",
        content:"First Post",
        verified:true
      }],
      toast:{
        disp:false,
        txt:""
      }
    }
  }
  handlePostCreation=(authorValue,contentValue)=>{
    console.group("handlePostCreation")
    const author=authorValue
    const content=contentValue
    
    const newPost={}
    newPost["author"]=author
    newPost["content"]=content
    
    this.setState((prevState)=>{
      newPost["id"]=prevState.id_counter
      newPost["verified"]=false
      const newPosts=prevState.posts.slice(0)
      newPosts.push(newPost)
      return({
        no_of_post:prevState.no_of_post+1,
        id_counter:prevState.id_counter+1,
        posts:newPosts
      })
    })
    console.groupEnd("handlePostCreation")
    this.toggleToast("Post Created!")
  }
  
  deletePost=(id)=>{
    this.setState((prevState)=>{
      const newPosts=[]
      prevState.posts.forEach((post)=>{
        if(post.id!==id){
          const newPost={}
          for(const prop in post){
            newPost[prop]=post[prop]
          }
          newPosts.push(newPost)
        }
      })
      return({posts:newPosts,no_of_post:prevState.no_of_post-1})
    })
    this.toggleToast("Post Deleted!")
  }

  
  verifyPost=(id)=>{
    this.setState((prevState)=>{
      const newPosts=[]
      prevState.posts.forEach((post)=>{
        const newPost={}
        for(const prop in post){
           newPost[prop]=post[prop]
        }
        if(post.id===id){
          newPost["verified"]=true
        }
        newPosts.push(newPost)
      })
      return({posts:newPosts})
    })
    this.toggleToast("Post Verified!")
  }

  toggleToast=(txt)=>{
    this.setState({toast:{disp:true,txt:txt}})
  }
  exitToast=()=>{
    this.setState({toast:{disp:false,txt:""}})
  }
  fns={deletePost:this.deletePost,verifyPost:this.verifyPost}
  render(){
    console.table(this.state.posts)
    const posts=this.state.posts;
    return(
      <div className="mainApp">
        <div className="tab-container">
          <PostTab className="postTab" posts={posts} fns={this.fns}/>
          <VerifyTab className="verifyTab" posts={posts} fns={this.fns}/>
        </div>
        <PostControl handlePostCreation={this.handlePostCreation}/>
        <ToastNotification toast={this.state.toast} exitfn={this.exitToast}/>
      </div>
    );
  }
}

export default App;
