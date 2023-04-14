import React from "react";
import { useState, useEffect } from 'react';
import api from "../../utils/api";
import styles from './editprofile.module.css'
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import FormField from "../../components/FormField/FormField";

const EditProfile = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
  const [userData, setUserData] = useState('');

  // const onSubmit = useCallback((data) => {
  //   const { name, about } = data
  //   api.editProfile(name, about)
  //     .then((obj) => { console.log(obj);
  //       if (!obj.err) {
  //         navigate('/')
  //       } else {
  //         console.log(obj.message)
  //       }
  //     })
  //     .catch((obj) => {
  //       console.log(obj)
  //     })
  // }, [])


  
  const onSubmit = (data) => {
    const { name, about } = data
    api.editProfile(name, about)
      .then((obj) => { console.log(obj);
        if (!obj.err) {
          navigate('/')
        } else {
          console.log(obj.message)
        }
      })
      .catch((obj) => {
        console.log(obj)
      })
  }


  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserData(res)
      })
  }, [])



  return (
    <section className={styles.autorization}>
      <h2 style={{ color: '#23a030' }}><u>МЕНЮ РЕДАКТИРОВАНИЯ ДАННЫХ ПОЛЬЗОВАТЕЛЯ</u></h2>
      <form className={styles.form}>
        <FormField
          title="Здесь Вы можете обновить имя"
          name="name"
          register={register}
          errors={errors}
          value={userData.name} />

        <FormField
          title="Здесь Вы можете обновить информацию о пользователе"
          name="about"
          register={register}
          errors={errors}
          value={userData.about} />

        <Button
          title="Изменить данные пользователя"
          className={styles.reg_button}
          fn={handleSubmit(onSubmit)} />
      </form>
      <Button title="Выход" route="/" className={styles.button} />
    </section>
  )
}

export default EditProfile;