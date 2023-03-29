import {Post} from '../../components/Post/Post';
import styles from './style.module.css';
import { useState, useEffect, useContext } from 'react';
import api from '../../utils/api';
import { UserContext } from '../../context/ContextUser';

import { CardContext } from "../../context/cardContext";

const PostList = ({searchQuery }) => {

  const [token, setToken] = useState(null);
  const [posts, setPosts] = useState([]);
  const { currentUser, setCurrentUser } = useContext(UserContext);

   const { cards, setCards } = useContext(CardContext);

  useEffect(() => {
    const tokenLS = localStorage.getItem('token')
    api.setToken(tokenLS)
    setToken(tokenLS)
    if (tokenLS && !searchQuery) {
      Promise.all([api.getPosts(), api.getUserInfo()])
      .then(([postsData, userData])=> {
        setCurrentUser(userData.name)
        setPosts(postsData)
      })
      .catch( err => console.log(err))
    }  
    else if (searchQuery) {
      api.search(searchQuery)
      .then((searchResult) => {
        setPosts(searchResult);

        setCards(searchResult);
        console.log(searchResult);


      })
      .catch(err => console.log(err))
    }  

    // else if (tokenLS && searchQuery) { 
    //   alert('ты козел!');
    //   Promise.all([api.search(searchQuery), api.getUserInfo()])
    //   .then(([searchResult, userData]) => {
    //     setCurrentUser(userData.name)
    //     setPosts(searchResult)
    //   })
    //   .catch(err => console.log(err))
    // }  
  }, [searchQuery])

  


















  console.log(searchQuery);
  // const handleRequest = async () => {
  //   if (!debounceValue) {
  //     const allCards = await api.getProductList();
  //     // object from API
  //     setCards(allCards.products);
  //   } else {
  //     // array from API
  //     const filterCards = await api.search(debounceValue);
  //     setCards(filterCards);
  //   }
  // }
















	if (!currentUser)
	    return <h1 className = {styles.textAttention}>Авторизируйтесь</h1>
	return (
		
		<div className={styles.cards}>
				{posts.map((item) => (
					 <Post   key = {item._id} {...item} />
					
					 ))}
						
		</div>
	);
};

export default PostList;