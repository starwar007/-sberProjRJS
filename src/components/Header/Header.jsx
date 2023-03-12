import React from "react";
import styles from "./header.module.css";
import cn from "classnames";
import api from "../../utils/api";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Search from "../Search/Search";
import PostForm from "../postForm/PostForm";
import ModalPost from "../modalPost/ModalPost";

export function Header({ onSubmit: propsOnSubmit, onInput }) {

  const navigate = useNavigate();
  const [modalActive, setModalActive] = useState(false);
  const [userToken, setUserToken] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  const handleInput = (e) => {
    onInput(e.target.value)
  }

  useEffect(() => {
    Promise.all([api.getUserInfo()])
      .then(([userData]) => {
        setCurrentUser(userData)
      })
      .catch(err => console.log(err))
  }, [userToken])

    return (
        <header className={cn(styles.header)}>
            <div className={styles.flex}>
              <div
                className={styles.logo} 
                onClick={()=>navigate('/')}>
                <img 
                  alt="Реактивные посты"
                  style={{ width: '100px' }}
                  src='https://cdn2.iconfinder.com/data/icons/computer-science-butterscotch-vol-2-1/512/Programming-1024.png' />
                <h1 className={styles.title} style={{ color: 'red', fontSize: '50px' }}>Реактивные посты</h1>
              </div>
              <Search/>
              <Button title="Меню Авторизации" route="/authorization"/>

              <ModalPost active={modalActive} setActive={setModalActive}>
        <PostForm />
      </ModalPost>

      <button onClick={() => setModalActive(true)}>Создать пост</button>

            </div>
        </header>
    )
  }

export default Header;