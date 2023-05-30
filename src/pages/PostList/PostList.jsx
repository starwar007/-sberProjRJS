import {Post} from '../../components/Post/Post';
import styles from './postlist.module.css';
import { useState, useEffect, useContext } from 'react';
import api from '../../utils/api';
import { UserContext } from '../../context/ContextUser';
import { CardContext } from "../../context/cardContext";
import { useNavigate } from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PostList = ({searchQuery }) => {

  const [token, setToken] = useState(null);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { cards, setCards } = useContext(CardContext);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [pages,setPages] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const tokenLS = localStorage.getItem('token')
    api.setToken(tokenLS)
    setToken(tokenLS)
    if (tokenLS && !searchQuery) {
      Promise.all([api.getPostPagination(page, 12, searchQuery), api.getUserInfo()])
      .then(([postsData, userData])=> {
        setCurrentUser(userData)
        setCards(postsData.posts)
        setPages(Math.round(postsData.total/12))  ;
      })
      .catch( err => navigate('*'))
    }  
    else if (searchQuery) {
      api.getPostPagination(page, 12, searchQuery)
      .then((searchResult) => {
        setCards(searchResult.posts);
        setPage(1);
        setPages(Math.round(searchResult.total/12))
      })
      .catch( err => navigate('*'))
    }  
  }, [searchQuery,page]);
  
	if (!currentUser)
	    return <h1 className = {styles.textAttention}>Авторизируйтесь</h1>
	return (
    <Stack spacing={2}>
      <div className={styles.posts}>
        {cards.map((item) => (
          <Post key={item._id} {...item} />
        ))}
      </div>
      <div className = {styles.centr}>
        {(pages !== 1) && <Pagination count={pages} page={page} onChange={handleChange} />}
      </div>
    </Stack>
	);
};

export default PostList;