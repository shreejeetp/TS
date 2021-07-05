import React from "react"
import './PostControl.css'

const PostControl=(props)=>{
    return(
        <div className="PostControlBox">
            <input type="text" placeholder="Enter Author Name here"/><br/>
            <input type="text" placeholder="Enter Post Content"/><br/>
            
            <button>Create a Post</button>
        </div>
    );
};

export default PostControl;