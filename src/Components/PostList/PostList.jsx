import React from "react"
import Post from "../Post/Post";

const PostList=(props)=>{
    return(
        <div className="postList">
            {props.posts1.map((post)=>(
                <Post key={post.id} data={post}  listType={props.listType} fns={props.fns}/>
        ))}
        </div>
    );
};

export default PostList;