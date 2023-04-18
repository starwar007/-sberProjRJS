import React from "react";
import api from "../../utils/api";
import styles from './resetpassword.module.css'
import { useNavigate } from "react-router-dom";
import { emailRegExp } from "../../utils/regExp";
import { passworgRegExp } from "../../utils/regExp";
import Button from "../../components/Button/Button";
import { useState } from 'react';

const emailPattern = {
  value: emailRegExp,
  message: "Email должен содержать буквы латинского алфавита, цифры и символ @"
};

const passPattern = {
  value: passworgRegExp,
  message: "Пароль должен содержать минимум восемь символов состоящих из букв латинского алфавита(заглавных или маленьких) и цифр"
};



const ResetPassword = () => {

  
  const [ email, setEmail ] = useState('');
  const [ tokenR, setTokenR ] = useState('');
  const [ password, setPassword ] = useState('');

  console.log(tokenR);

  const navigate = useNavigate();

  const onSubmit1 = () => {
    api.resetPassword(email)
      .then(obj => {
        if (obj.message === 'Письмо успешно отправлено') { console.log(obj); alert(obj.message)}
        else { alert(console.log(obj)); alert(obj.message) }
      })
      .catch(err => { navigate('*'); console.log(err) })
  };

  const onSubmit2 = () => {
    api.editPassword(tokenR, password)
       .then(obj => { 
        if(obj.data){console.log(obj); alert(`Пароль пользователя ${obj.data.name} успешно обновлен`); navigate('/authorization')} 
        else {alert(console.log(obj)); alert(obj.message)}
        })
      };      



  return (
    <section className={styles.resetpassword}>
      <h2 style={{ color: '#23a030' }}><u>МЕНЮ СБРОСА ПАРОЛЯ</u></h2>
      <div className={styles.divform}>


        <div className={styles.input_wrapper}>
          <label>E-mail(действующей эл. почты)</label>
          <input className={styles.input}
            onChange={(e) => { setEmail(e.target.value) }}
            placeholder='E-mail(действующей эл. почты)'
            autoComplete="new-email"
          />
          <span className={styles.attention}>{emailPattern.message}</span>
        </div>

        <Button
          title="Получить токен на почту"
          className={styles.auth_button}
          fn={onSubmit1}
          disabled={(emailPattern.value.test(email) === true) ? false : true}
        />

        <div className={styles.textarea_wrapper}>
          <label>Токен(секретная строка присланная на эл. адрес ДЕЙСТВУЮЩЕЙ почты)</label>
          <textarea
            type="text"
            name="textarea"
            placeholder="Токен"
            cols="64"
            rows="2"
            onChange={(e) => { setTokenR(e.target.value) }}
          />
        </div>

        <div className={styles.input_wrapper}>
          <label>Новый пароль</label>
          <input className={styles.input}
            type='password'
            onChange={(e) => { setPassword(e.target.value) }}
            placeholder='Новый пароль'
            autoComplete="new-password"
            pattern={passPattern}
          />
          <span className={styles.attention}>{passPattern.message}</span>
        </div>

        <Button
          title="Обновить пароль"
          className={styles.auth_button}
          fn={onSubmit2}
          disabled={(passworgRegExp.test(password) === true) ? false : true}
        />
      </div>
      <Button title="Выход" route="/" className={styles.button} />

    </section>
  )
};

export default ResetPassword;