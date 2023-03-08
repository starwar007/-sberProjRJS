import React from "react";
import api from "../../utils/api";

const Main = () => {
    api.getPosts().then(res => console.log(res))
    return (
       <main className="main">Hello posts</main> 
    )
 
}

export default Main