import React from "react";
import styles from "./header.module.css";
import cn from "classnames";
import api from "../../utils/api";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Search from "../Search/Search";
import ModalPost from "../ModalPost/ModalPost"
import PostForm from "../PostForm/PostForm"

export function Header({ onSubmit: propsOnSubmit, onInput }) {

  const navigate = useNavigate();
  const [modalActive, setModalActive] = useState(false);

  const handleInput = (e) => {
    onInput(e.target.value)
  }

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

              {/* <Route exact path={authorizationIn} element={<Search/>}></Route> */}
              {/* <Route exact path='/authorizationIn' element={<Search/>}></Route> */}

              <Search/>
              <Button title="Добавить пост"  fn ={()=>setModalActive(true)}/>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Button title="Авторизоваться" route="/authorization" className={styles.buttonLong}/>
              <Button title="Зарегистрироваться" route="/registration" className={styles.buttonLong}/>
              </div>
              <ModalPost active={modalActive} setActive={setModalActive}>
                  <PostForm />
              </ModalPost>
            {/* <button onClick={() => setModalActive(true)}>Создать пост</button> */}
            </div>
        </header>
    )
  }

export default Header;