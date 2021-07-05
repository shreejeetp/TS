import React from "react"
import "./Post.css";

const Post=(props)=>{
    
    console.log(props.data.verified)
    if(props.data.verified===false){
        console.log("returning null")
        return(null);
    }
    
    return(
        <div key={props.data.id} className="postBox">
            <h4>{props.data.author}</h4>
            <p>{props.data.content}</p>
        </div>
    );
    
};

export default Post;