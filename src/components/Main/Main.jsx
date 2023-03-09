import React from "react";
import api from "../../utils/api";
import style from './main.module.css';
import PostList from "../../pages/PostList/post-list";

const Main = () => {
    api.getPosts().then(res => console.log(res))
    return (
       <section className={style.catalog}>
            <PostList/>
       </section> 
    )
 
}

export default Main