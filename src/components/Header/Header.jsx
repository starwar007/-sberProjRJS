import React from "react";
import styles from "./header.module.css";
import cn from "classnames";
import api from "../../utils/api";
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Search from "../Search/Search";
import ModalPost from "../ModalPost/ModalPost"
import PostForm from "../PostForm/PostForm"
import { UserContext } from "../../context/ContextUser";

export function Header({user}) {

  const navigate = useNavigate();
  const [modalActive, setModalActive] = useState(false);

  function Exit () {
    localStorage.clear();
    window.location.reload();
  }


    return (
        <header className={cn(styles.header)}>
            <div className={styles.flex}>
              <div
                className={styles.logo} 
                onClick={() => navigate('/')}>
                <img 
                  alt="Реактивные посты"
                  style={{ width: '100px' }}
                  src='https://cdn2.iconfinder.com/data/icons/computer-science-butterscotch-vol-2-1/512/Programming-1024.png' />
                <h1 className={styles.title}>Реактивные посты</h1>
              </div>


              {/* <Search/> */}
              { user ? <><Search/> <Button title="Добавить пост"  fn ={()=>setModalActive(true)} className={styles.buttonLong}/></>: <></>}

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                { user ? <><span>{UserContext.displayName}</span> <Button title="Выход" fn={Exit} route="/" className={styles.buttonLong}/></>: <> 
                  <Button title="Авторизоваться" route="/authorization" className={styles.buttonLong}/>
                  <Button title="Зарегистрироваться" route="/registration" className={styles.buttonLong}/> 
                </>  
                }
              </div>
              <ModalPost active={modalActive} setActive={setModalActive}>
                  <PostForm />
              </ModalPost>
            </div>
        </header>
    )
  }

export default Header;