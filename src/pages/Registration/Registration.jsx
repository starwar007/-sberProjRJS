import React from "react";
// import { useCallback  } from 'react';
import api from "../../utils/api";
import styles from './registration.module.css';
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import FormField from "../../components/FormField/FormField";
import { emailRegExp } from "../../utils/regExp";
import { passworgRegExp } from "../../utils/regExp";

const emailPattern = {
  value: emailRegExp,
  message: "Email должен содержать буквы латинского алфавита, цифры и символ @"
};

const passPattern = {
  value: passworgRegExp,
  message: "Пароль должен содержать минимум восемь символов состоящих из букв латинского алфавита(заглавных или маленьких) и цифр"
};

const Registration = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
});

// const onSubmit = useCallback((data) => {
//   const { email, group, password } = data
//   api.signUp(email, group, password)
//       .then((obj) => {
//         console.log(obj)
//            if (!obj.err) {
//             navigate('/authorization')
//            } else {
//             console.log(obj.message)
//            }
//       })
//       .catch((obj) => {
//           console.log(obj)
//       })
// }, [])

const onSubmit = (data) => {
  const { email, group, password } = data
  api.signUp(email, group, password)
      .then((obj) => {
        console.log(obj)
           if (!obj.err) {
            navigate('/authorization')
           } else {
            console.log(obj.message);
            alert('Некорректный e-mail или пароль (пользьзователь с таким e-mail уже существует и др.) ');
           }
      })

      //дополнительно еще раз это посмотреть
       .catch( err => navigate('*'))

      // .catch((obj) => { 
      //     console.log(obj)
      // })
}

  return (
    <section className={styles.autorization}>
      <h2 style={{ color: '#23a030' }}><u>МЕНЮ РЕГИСТРАЦИИ</u></h2>
      <form className={styles.form}>
        <FormField
          title="Email"
          name="email"
          pattern={emailPattern}
          register={register}
          errors={errors}
          isAutoComplete={"new-email"} />

        <FormField
          title="Группа"
          name="group"
          register={register}
          errors={errors}
          value="group-10"
          isReadonly={true} />  

        <FormField
          title="Пароль"
          name="password"
          type="password"
          pattern={passPattern}
          register={register}
          errors={errors}
          isAutoComplete={"new-password"} />

        <Button 
          title="Зарегестрироваться" 
          className={styles.reg_button} 
          fn={handleSubmit(onSubmit)} />

        </form>
        <Button title="Выход" route="/" className={styles.button} />
    </section>
  )
}

export default Registration;