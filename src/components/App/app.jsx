import React from 'react';
import styles from './app.module.css'
import { useState, useEffect, useContext, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import api from '../../utils/api';
import cn from "classnames";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
// import PostList from '../../pages/PostList/PostList';
import Authorization from '../../pages/Authorization/Authorization';
import '@fontsource/source-sans-pro';
import Registration from '../../pages/Registration/Registration';
import {UserContext} from "../../context/ContextUser";
import { PostPage } from '../../pages/PostPage/PostPage';
import SearchInfo from '../SearchInfo/SearchInfo';
import {CardContext} from "../../context/cardContext";
import { NotFound } from '../../pages/NotFound/NotFound';
import { isLiked } from '../../utils/post';

import EditProfile from '../../pages/EditProfile/EditProfile';

function App() {

  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);

   useEffect(() => {
     const tokenFromLS = localStorage.getItem('token');
      if (tokenFromLS) {
        api.setToken(tokenFromLS)
        api.getUserInfo()
        .then(res => {
          setCurrentUser(res)
        })
        setToken(tokenFromLS)
      }
   },[])

   const handleFormSubmit = (inputText) => {
    setSearchQuery(inputText);
  }

  const handleInputChangeErase = () => {
    setSearchQuery('');
  }

  //Установка/снятие лайка вручную (по клику на сердечко в компоненте Post)
  const handlePostLike = useCallback((post) => {
        //По выбранному посту запрос лайка true/false через компонент isLiked, true - если у выбранного поста есть лайк залогиненого юсера 
      const liked = isLiked(post.likes, currentUser._id)
        //запрос выбранного поста с изменением лайка на противоположный
        return api.changeLikePost(post._id, liked)
          //Получаем пост с измененным лайком
         .then((updatePost) => {
          //Делаем подготовку к перерендеру карточек и обновляем ту карточку (updatePost), лайк которой поменялся, остальные остаются, как были (cardState)
           const newPosts = cards.map(cardState => {
             return cardState._id === updatePost._id ? updatePost : cardState
           })
           
            //Формирование массива favorites - это массив постов залайканных для текущего пользователя
           if (!liked) {
            //Если пост изначально был незалайкан, то при лаковании его добаляется в массив favorities для текущего пользователя только что залайканный пост
             setFavorites(prevState => [...prevState, updatePost ])
            } else {
            //Если пост изначально был залайкан, то при снятии лайка из массива favorities для текущего пользователя пост удаляется  
             setFavorites(prevState => prevState.filter(card => card._id !== updatePost._id))
           }
           //заливаем в юсстейт для перерендера обновленнный cards массив с объектами-постами с изменным лайком одной из карточек
           setCards(newPosts);
           //Возвращаем в исходную переменную handlePostLike данные поста с измененным лайком
           return updatePost;
        })
   //Подписка на перерасчет handlePostLike при изменении текущего пользователя или отображения карточек на странице (пожет быть отображение изменено по поиску)     
   }, [currentUser, cards])

  return (
    <UserContext.Provider value={{
      currentUser,
      setCurrentUser,
      setToken
    }}>

    <CardContext.Provider value={{ cards, setCards,  handleLike: handlePostLike, }}>

      <Header 
        SearchErase={handleInputChangeErase} 
        onSubmit={handleFormSubmit}
      />
      <main className={styles.main}>
        <SearchInfo searchText={searchQuery} />
        <Routes>
          <Route element={ <Main searchQuery={searchQuery}/> } exact path="/"/>
          {/* <Route element={ <Main searchQuery={searchQuery}/> } exact path="/*">
            <Route path='editProfile' element={<EditProfile/>}></Route>
          </Route>   */}




          {/* <Route exact path='/postlist' element={<PostList/>}></Route> */}
          <Route exact path='/authorization' element={<Authorization/>}></Route>
          <Route exact path='/registration' element={<Registration/>}></Route>

          <Route exact path='/editProfile' element={<EditProfile/>}></Route>

          <Route exact path ='/Post/:PostId' element={<PostPage/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </ main>
      <Footer />


      </CardContext.Provider>

    </UserContext.Provider>

  )
}

export default App;