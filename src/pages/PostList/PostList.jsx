
// import data from '../../assets/data.json';
import {Post} from '../../components/Post/Post';
import styles from './style.module.css';
import { useState, useEffect, useContext } from 'react';
import api from '../../utils/api';
import { UserContext } from '../../context/ContextUser';

// console.log(localStorage.getItem('token'));

const PostList = () => {

  const [token, setToken] = useState(null);
  const [posts, setPosts] = useState([]);
  const {currentUser, setCurrentUser } = useContext(UserContext)

  useEffect(() => {
    const tokenLS = localStorage.getItem('token')
    api.setToken(tokenLS)
    setToken(tokenLS)
    if (tokenLS) {
      Promise.all([api.getPosts(), api.getUserInfo()])
      .then(([postsData, userData])=> {
        setCurrentUser(userData.name)
        setPosts(postsData)
      })
      .catch( err => console.log(err))
    }
      
  }, [])
	// console.log('render PostList');
	// console.log(posts);
	// const token = localStorage.getItem('token');
	if (!currentUser)
	    return <h1 className = {styles.textAttention}>Авторизируйтесь</h1>
	return (
		
		<div className={styles.cards}>
				{posts.map((item,index) => (
					 <Post   key = {item._id} {...item} />
					
					 ))}
						
		</div>
	);
};

export default PostList;