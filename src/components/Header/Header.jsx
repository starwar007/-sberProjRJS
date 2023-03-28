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

export function Header() {

  const navigate = useNavigate();
  const [modalActive, setModalActive] = useState(false);
  const {currentUser, setCurrentUser } = useContext(UserContext)

  useEffect(() => {
    console.log(currentUser)
  })

    return (
        <header className={cn(styles.header)}>
          
              <div
                className={styles.logo} 
                onClick={() => navigate('/')}>
                <img 
                  alt="Реактивные посты"
                  style={{ width: '100px' }}
                  src='https://cdn2.iconfinder.com/data/icons/computer-science-butterscotch-vol-2-1/512/Programming-1024.png' />
                <h1 className={styles.title}>Реактивные посты</h1>
              </div>
              <div className={styles.header_user}>
                { (currentUser) ?
                <>
                  <Search/>
                  <Button title="Добавить пост"  fn ={()=>setModalActive(true)} className={styles.buttonLong}/>
                  <div className={styles.userdata_wrapper}> 
                    <span className={styles.username}>{currentUser}</span>  
                    <Button title="Выйти" fn = {()=> {
                        localStorage.removeItem('token')
                        setCurrentUser(null)
                      } 
                    } className={styles.buttonLong}/>
                  </div> 
                </>: 
                  <div> 
                    <Button title="Авторизоваться" route="/authorization" className={styles.buttonLong}/>
                    <Button title="Зарегистрироваться" route="/registration" className={styles.buttonLong}/> 
                  </div>  
                }
              </div>
              <ModalPost active={modalActive} setActive={setModalActive}>
                  <PostForm />
              </ModalPost>
  
        </header>
    )
  }

export default Header;