
// import data from '../../assets/data.json';
import {Post} from '../../components/Post/Post';
import styles from './style.module.css';
import { useState, useEffect, useContext } from 'react';
import api from '../../utils/api';
  

// console.log(localStorage.getItem('token'));

const PostList = () => {

  const [token, setToken] = useState(null);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    const tokenLS = localStorage.getItem('token')
    api.setToken(tokenLS)
    setToken(tokenLS)

    Promise.all([api.getPosts(), api.getUserInfo()])
    .then(([postsData, userData])=> {
      setCurrentUser(userData)
      setPosts(postsData)
      console.log(postsData);
    })
    .catch( err => console.log(err))
    
    }, [])
	// console.log('render PostList');
	// console.log(posts);
	// const token = localStorage.getItem('token');
	if (!token)
	    return
	return (
		
		<div className={styles.cards}>
				{posts.map((item,index) => (
					 <Post   key = {item._id} {...item} />
					
					 ))}
						
		</div>
	);
};

export default PostList;