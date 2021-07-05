import React from "react"
import PostList from "../PostList/PostList";

const VerifyTab=(props)=>{
    props.posts.forEach(post=>(
        post.verified=!post.verified
    ));
    const posts1=props.posts;
    posts1.forEach(post=>{
        console.log("in verify: "+ post.verified)
    })
    return(
        <div className="verifyTab">
            <PostList posts1={posts1}/>
        </div>
    );
};

export default VerifyTab;