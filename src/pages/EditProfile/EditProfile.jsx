import React from "react";
import { useState, useEffect, useCallback } from 'react';
import api from "../../utils/api";
import styles from './editprofile.module.css'
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState('');
  const [name,setName] = useState('');
  const [about,setAbout] = useState('');
  const [avatar,setAvatar] = useState('');

  // const onSubmit = useCallback((data) => {
  //   const { name, about } = data
  //   api.editProfile(name, about)
  //     .then((obj) => {
  //       if (!obj.err) {
  //         navigate('/')
  //       } else {
  //         console.log(obj.message)
  //       }
  //     })
  //     .catch((err) => {
  //       navigate('*');
  //       console.log(err)})
  // }, []);

  const onSubmit = useCallback(() => {
    Promise.all([api.editProfile(name, about), api.editAvatar(avatar)])
      .then(([data1, data2]) => {
        if(!data1.message && !data1.message) 
        {navigate('/')}
        else{console.log(data1.message); console.log(data2.message)}
      })
      .catch((err) => {
        navigate('*');
        console.log(err)})
  }, [name, about, avatar]);


  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserData(res)
        setAvatar(res.avatar)
        setName(res.name)
        setAbout(res.about)
      })
  }, []);

  return (
    <section className={styles.editprofile}>
      <h2 style={{ color: '#23a030' }}><u>МЕНЮ РЕДАКТИРОВАНИЯ ДАННЫХ ПОЛЬЗОВАТЕЛЯ</u></h2>
      <div className={styles.divform}>

      <div className={styles.input_wrapper}>
            <label>Здесь Вы можете обновить свое имя (текст два и более символа)</label>
            <input className={styles.input}
              defaultValue={userData.name}
              onChange={(e) => {setName(e.target.value)}}
              placeholder='Здесь Вы можете обновить свое имя. Поле обязательно к заполнению'
              required={true}
            />
      </div>

      <div className={styles.input_wrapper}>
            <label>Здесь Вы можете обновить информацию о себе (текст два и более символа)</label>
            <input className={styles.input}
              defaultValue={userData.about}
              onChange={(e) => {setAbout(e.target.value)}}
              placeholder='Здесь Вы можете обновить информацию о себе. Поле обязательно к заполнению'
              required
            />
      </div>

      <div className={styles.input_wrapper}>
            <label>Здесь Вы можете обновить свой аватар, вставив адрес URL изображения: https://...</label>
            <input className={styles.input}
              defaultValue={userData.avatar}
              onChange={(e) => {setAvatar(e.target.value)}}
              placeholder='Здесь Вы можете обновить свой аватар. Поле обязательно к заполнению'
              required
            />
      </div>

        <p className={styles.textAvatar}>Ваш значок аватара выглядит так:</p>
        <div className={styles.Avatar}>
          <img src={avatar} alt="БЕЗ АВАТАРА" />
        </div>    

        <Button
          title="Изменить данные пользователя"
          className={styles.reg_button}
          fn={onSubmit}
          disabled={(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/g.test(avatar) === true && name.length>=2 && about.length>=2) ? false : true}
          />
      </div>
      <Button title="Выход" route="/" />
    </section>
  )
}

export default EditProfile;