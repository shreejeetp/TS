import React, { Component } from "react"
import './PostControl.css'

class PostControl extends Component{
    props;
    constructor(props){
        super();
        this.state={
            authorValue:"",
            contentValue:""
        }
        this.props=props    
    }

    handleChangeAuthor=(e)=>{
        this.setState({authorValue:e.target.value});
    }

    handleChangeContent=(e)=>{
        this.setState({contentValue:e.target.value});
    }

    render(){
        return(
            <div className="PostControlBox">
                <input type="text" value={this.state.authorValue} onChange={this.handleChangeAuthor} placeholder="Enter Author Name here"/><br/>
                <input type="text" value={this.state.contentValue} onChange={this.handleChangeContent} placeholder="Enter Post Content"/><br/>
                
                <button onClick={()=>this.props.handlePostCreation(this.state.authorValue,this.state.contentValue)}>Create a Post</button>
            </div>
        )
    }
}

export default PostControl;