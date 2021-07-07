import React from "react"
import PostList from "../PostList/PostList";
import SmallHeader from "../SmallHeader/SmallHeader";

const PostTab=(props)=>{
    const posts=props.posts;
    return(
        <div className="postTab">
            
            <SmallHeader header_text="Post Tab"/>
            <PostList posts1={posts} listType={0} fns={props.fns}/>
        </div>
    );
};

export default PostTab;