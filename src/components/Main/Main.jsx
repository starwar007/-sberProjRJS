import React from "react";
import style from './main.module.css';
import PostList from "../../pages/PostList/PostList";



const Main = ({searchQuery}) => {
    return (
    <>
       <section className={style.catalog}>
            <PostList searchQuery={searchQuery}/>
       </section>
    </> 
    )
 
}

export default Main