import React from "react"
import PostList from "../PostList/PostList";

const PostTab=(props)=>{
    const posts=props.posts;
    return(
        <div className="postTab">
            <PostList posts1={posts}/>
        </div>
    );
};

export default PostTab;