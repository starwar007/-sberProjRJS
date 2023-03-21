import React from "react";
import { useState, useEffect, useContext, useCallback  } from 'react';
import api from "../../utils/api";
import styles from './registration.module.css'
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import FormField from "../../components/FormField/FormField";
import { emailRegExp } from "../../utils/regExp";
import { passworgRegExp } from "../../utils/regExp";

const emailPattern = {
  value: emailRegExp,
  message: "Email должен содержать буквы латинского алфавита, цифры и символ @"
};

const passPattern = {
  value: passworgRegExp,
  message: "Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру"
};

const Registration = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
});

const onSubmit = useCallback((data) => {
  const { email, group, password } = data
  console.log(data)
  api.signUp(email, group, password)
      .then(obj => {
          console.log(obj)
          if (obj.ok) {
            navigate('/')
          } else {
              alert(obj.message)
          }
      })
      .catch(() => {
          alert('Ошибка сервера')
      })
}, [])

  return (
    <section className={styles.autorization}>
      <h2 style={{ color: '#23a030' }}><u>МЕНЮ РЕГИСТРАЦИИ</u></h2>
      <form className={styles.form}>
        <FormField
          title ="E-mail"
          name='email'
          pattern={emailPattern}
          register={register}
          errors={errors} 
            />
          <FormField
            title="Группа"
            name="group"
            register={register}
            errors={errors} 
          />
          <FormField
            title ="Пароль"
            name='password'
            type='password'
            pattern={passPattern}
            register={register}
            errors={errors} 
          />
          <Button 
            title="Зарегестрироваться" 
            className={styles.button} 
            fn={handleSubmit(onSubmit)}
          />
        </form>
        <Button title="Выход" route="/" className={styles.button} />
    </section>
  )


}

export default Registration;