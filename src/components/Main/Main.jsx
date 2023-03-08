import React from "react";
import api from "../../utils/api";
import PostList from '../PostList/post-list';

const Main = () => {
    api.getPosts().then(res => console.log(res))
    return (
       <main className="main">Hello posts
        <PostList/>
       </main> 
    )
 
}

export default Main