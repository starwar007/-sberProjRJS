import React from "react";
import style from './main.module.css';
import PostList from "../../pages/PostList/PostList";

const Main = ({searchQuery, searchCount}) => {
    return (
       <section className={style.catalog}>
            <PostList searchQuery={searchQuery} searchCount={searchCount}/>
       </section> 
    )
 
}

export default Main