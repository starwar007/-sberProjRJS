import React from "react";
import { useContext } from 'react';
import api from "../../utils/api";
import styles from './authorization.module.css'
import { UserContext } from "../../context/ContextUser";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import FormField from "../../components/FormField/FormField";
import { emailRegExp } from "../../utils/regExp";
import { passworgRegExp } from "../../utils/regExp";
import Button from "../../components/Button/Button";

const emailPattern = {
  value: emailRegExp,
  message: "Email должен содержать буквы латинского алфавита, цифры и символ @"
};

const passPattern = {
  value: passworgRegExp,
  message: "Пароль должен содержать минимум восемь символов состоящих из букв латинского алфавита(заглавных или маленьких) и цифр"
};



const Authorization = () => {

 
  // const { setToken, currentUser, setCurrentUser } = useContext(UserContext);
  const { setToken, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}} = useForm({
      mode: 'onChange'
    });

  // const onSubmit = useCallback((data) => {
  //   const {email, password} = data
  //   api.signIn(email, password)
  //     .then(obj => {

  //       if (obj.token) {
  //         api.setToken(obj.token);
  //         setToken(obj.token);
  //         setCurrentUser(obj.data);
  //         localStorage.setItem('token', obj.token);
  //         navigate('/');
  //       }
  //       else {alert('Вы ввели неверный e-mail или пароль')}
  //       // navigate('/')
  //       // api.setToken(obj.token)
  //       // setToken(obj.token)
  //       // setCurrentUser(obj.data)
  //       // localStorage.setItem('token', obj.token);

  //     })
  //   }, []);

    const onSubmit = (data) => {
      const {email, password} = data
      api.signIn(email, password)
        .then(obj => {
          if (obj.token) {
            api.setToken(obj.token);
            setToken(obj.token);
            setCurrentUser(obj.data);
            localStorage.setItem('token', obj.token);
            navigate('/');
          }
          else {alert('Вы ввели неверный e-mail или пароль')}
        })
        .catch( err => navigate('*'))
      };

  return (
    <section className={styles.autorization}>
      <h2 style={{ color: '#23a030' }}><u>МЕНЮ АВТОРИЗАЦИИ</u></h2>
        <form className={styles.form}>
          <FormField
            title ="E-mail"
            name='email'
            pattern={emailPattern}
            register={register}
            errors={errors} />

          <FormField
            title ="Пароль"
            name='password'
            type='password'
            pattern={passPattern}
            register={register}
            errors={errors} />

          <Button 
            title="Авторизоваться" 
            className={styles.auth_button} 
            fn={handleSubmit(onSubmit)} />
        </form>
          <Button title="Выход" route="/" className={styles.button} />
      </section> 
    )
  };

export default Authorization;