import React from "react"
import PostList from "../PostList/PostList";
import SmallHeader from "../SmallHeader/SmallHeader";
/* import { isEqual } from "lodash";
 */
const VerifyTab=(props)=>{
    /* console.group("VerifyTab.jsx")
    const posts1=[]
    props.posts.forEach((post,i) => {
        const newPost={}
        for(const prop in post){
           newPost[prop]=post[prop]
        }
        newPost["verified"]=!newPost["verified"]
        posts1.push(newPost)
    })
    console.log("2 arrays are equal: "+isEqual(posts1,props.posts))
    console.groupEnd()
 */
    
    return(
        <div className="postTab">
            <SmallHeader header_text="Verify Tab"/>
            <PostList posts1={props.posts} listType={1} fns={props.fns}/>
        </div>
    );
}

export default VerifyTab;