import React from "react";
import style from './main.module.css';
import PostList from "../../pages/PostList/PostList";

const Main = () => {
    return (
       <section className={style.catalog}>
            <PostList/>
       </section> 
    )
 
}

export default Main