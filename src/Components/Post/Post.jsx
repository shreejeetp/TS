import React from "react"
import "./Post.css";

const Post=(props)=>{
    console.group("Post.jsx")
    if(props.data.verified===false && props.listType===1){
        console.log("returning verify post")
        console.groupEnd()
        return(
            <div className="postBox">
                <h4 className="center">{props.data.author}</h4>
                <hr/>
                <p className="center">{props.data.content}</p>
                <hr/>
                <div className="buttonGroup">
                    <button onClick={()=>props.fns.deletePost(props.data.id)}>Delete</button>
                    <button onClick={()=>props.fns.verifyPost(props.data.id)}>Verify</button>
                    
                </div>
            </div>
        );
    }
    else if(props.data.verified===true && props.listType===0)
    {
        console.log("returning normal post")
        console.groupEnd()
        return(
            <div className="postBox">
                <h4 className="center">{props.data.author}</h4>
                <hr/>
                <p className="center">{props.data.content}</p>
            </div>
        );
    }
    else{
        console.log("returning null post")
        return(null)
    }
    
};

export default Post;