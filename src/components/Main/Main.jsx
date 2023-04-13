import React from "react";
import style from './main.module.css';
import PostList from "../../pages/PostList/PostList";
// import { Outlet } from "react-router-dom";


const Main = ({searchQuery}) => {
    return (
    <>
        {/* <Outlet/> */}
       <section className={style.catalog}>
            <PostList searchQuery={searchQuery}/>
       </section>
    </> 
    )
 
}

export default Main