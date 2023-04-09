import {Post} from '../../components/Post/Post';
import styles from './style.module.css';
import { useState, useEffect, useContext, useCallback } from 'react';
import api from '../../utils/api';
import { UserContext } from '../../context/ContextUser';
import { CardContext } from "../../context/cardContext";
import { useNavigate } from 'react-router-dom'

const PostList = ({searchQuery }) => {

  const [token, setToken] = useState(null);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { cards, setCards } = useContext(CardContext);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenLS = localStorage.getItem('token')
    api.setToken(tokenLS)
    setToken(tokenLS)
    if (tokenLS && !searchQuery) {
      Promise.all([api.getPosts(), api.getUserInfo()])
      .then(([postsData, userData])=> {
        setCurrentUser(userData)
        setCards(postsData)
      })
      .catch( err => navigate('*'))
    }  
    else if (searchQuery) {
      api.search(searchQuery)
      .then((searchResult) => {
        setCards(searchResult);
        console.log(searchResult);
      })
      .catch( err => navigate('*'))
    }  
  }, [searchQuery]);
  
	if (!currentUser)
	    return <h1 className = {styles.textAttention}>Авторизируйтесь</h1>
	return (
		
		<div className={styles.posts}>
				{ cards.map((item) => (
					 <Post key = {item._id} {...item} />
					 ))}
						
		</div>
	);
};

export default PostList;