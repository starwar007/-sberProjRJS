import React from "react";
import styles from "./header.module.css";
import cn from "classnames";
import { useContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import Search from "../Search/Search";
import ModalPost from "../modalPost/ModalPost";
import PostForm from "../postForm/PostForm";
import { UserContext } from "../../context/ContextUser";
import { CardContext } from "../../context/cardContext";

export function Header({ onSubmit, SearchErase }) {

  const navigate = useNavigate();
  const location = useLocation();
  const {currentUser, setCurrentUser } = useContext(UserContext);
  const {modalActive, setModalActive} = useContext(CardContext);

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
            { (currentUser) ?
            <>
              <div className={styles.search}>
                {(location.pathname === '/SberProjRJS/' || location.pathname === '/') && <Search  onSubmit={onSubmit} SearchErase={SearchErase}/>}
              </div>
              <div className={styles.add_post}>
              {(location.pathname === '/SberProjRJS/' || location.pathname === '/') && 
                <Button title="Добавить пост"  fn ={()=>setModalActive(true)} className={styles.buttonLong}/> }
              </div>
              <div className={styles.userdata_wrapper1}>
                <div onClick={() => navigate('/editProfile')} className={styles.Avatar} >
                  <img src={currentUser.avatar} alt="БЕЗ АВАТАРА" />
                </div>

                <div className={styles.userdata_wrapper2}>
                  <div onClick={() => navigate('/editProfile')}>
                   <span className={styles.username}>{currentUser.name}</span>
                  </div>
                   <Button title="Выйти" route="/" fn = {()=> {
                     localStorage.removeItem('token');
                     setCurrentUser(null);
                     SearchErase();
                     } 
                    } className={styles.buttonLong}/>
                </div> 
              </div>
            </>: 
              <div className={styles.login_wrapper}> 
                <Button title="Авторизоваться" route="/authorization" className={styles.buttonLong0}/>
                <Button title="Зарегистрироваться" route="/registration" className={styles.buttonLong0}/> 
              </div>  
            }
          <ModalPost active={modalActive} setActive={setModalActive}>
              <PostForm 
                setActive={setModalActive} 
                title='Создать пост'
                buttonTitle='Добавить пост' />
          </ModalPost>
    </header>
)
  }

export default Header;