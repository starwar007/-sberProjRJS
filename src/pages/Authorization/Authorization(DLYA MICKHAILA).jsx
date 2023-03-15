import React from "react";
import { useState, useEffect, useContext } from 'react';
import api from "../../utils/api";
import styles from './authorization.module.css'
import Button from "../../components/Button/Button";
// import cn from "classnames";
import { UserContext } from "../../context/ContextUser";
// import { Link } from 'react-router-dom';

const Authorization = ({ onSubmit: propsOnSubmit, onInput }) => {

  const handleInput = (e) => {
    onInput(e.target.value)
  }

  const [userToken, setUserToken] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [usercontext, setusercontext] = useContext(UserContext);

  function Exit() {
    setUserToken('');
    setCurrentUser('');
    api.setToken('');
    setusercontext(false);
  }


  function LogIn() {
  }

  return (
    <section className={styles.autorization}>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto' }}>
          <h2 style={{ color: '#23a030' }}><u>МЕНЮ АВТОРИЗАЦИИ</u></h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <input type="password1" name="password1" id="password1" required placeholder="Пароль" size="19" autoComplete="off" />
          <input type="email" name="email1" id="email1" required placeholder="Эл. почта" size="19" />
          <Button title="Авторизоваться" route="/" fn={LogIn} className={styles.button} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', marginTop: '30px' }}>
          <Button title="Выход" route="/" fn={Exit} className={styles.button} />
        </div>
      </div>

    </section> 
  )

}

export default Authorization;