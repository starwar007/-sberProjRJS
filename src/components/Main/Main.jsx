import React from "react";
import api from "../../utils/api";
import PostList from '../PostList/post-list';
import style from './main.module.css'

const Main = () => {
    api.getPosts().then(res => console.log(res))
    return (
       <main className={style.main}>
            <PostList/>
       </main> 
    )
 
}

export default Main