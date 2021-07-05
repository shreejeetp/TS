import React from "react"
import Post from "../Post/Post";

const PostList=(props)=>{
    props.posts1.map((post)=>(
        console.log("in postlist: "+post.verified)
    ))
    return(
        <div className="postList">
            {props.posts1.map((post)=>(
                <Post data={post}/>
        ))}
        </div>
    );
};

export default PostList;