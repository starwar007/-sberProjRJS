import React from "react";
import { useState, useEffect } from 'react';
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

  const onSubmit = () => {
    Promise.all([api.editProfile(name, about), api.editAvatar(avatar)])
      .then(([data1, data2]) => {
        if(!data1.message && !data2.message) 
        {navigate('/')}
        else{ 
          if(data1.message && !data2.message) {console.log(data1.message); alert(data1.message)}
          else if (!data1.message && data2.message) {console.log(data2.message); alert(data2.message)}
          else if (data1.message && data2.message) {console.log(data1.message + ". " + data2.message); alert(`${data1.message}. ${data2.message}`)}
          else {}
        }
      })
      .catch((err) => {
        navigate('*');
        console.log(err);
        alert(err)})
  };


  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserData(res);
        setAvatar(res.avatar);
        setName(res.name);
        setAbout(res.about)
      })
  }, []);

  return (
    <section className={styles.editprofile}>
      <h2 style={{ color: '#23a030' }}><u>МЕНЮ РЕДАКТИРОВАНИЯ ДАННЫХ ПОЛЬЗОВАТЕЛЯ</u></h2>
      <div className={styles.divform}>

      <div className={styles.input_wrapper}>
            <label>Здесь Вы можете обновить свое имя</label>
            <input className={styles.input}
              defaultValue={userData.name}
              onChange={(e) => {setName(e.target.value)}}
              placeholder='Здесь Вы можете обновить свое имя'
            />
      </div>

      <div className={styles.input_wrapper}>
            <label>Здесь Вы можете обновить информацию о себе</label>
            <input className={styles.input}
              defaultValue={userData.about}
              onChange={(e) => {setAbout(e.target.value)}}
              placeholder='Здесь Вы можете обновить информацию о себе'
            />
      </div>

      <div className={styles.input_wrapper}>
            <label>Здесь Вы можете обновить свой аватар, вставив адрес URL изображения, к примеру: https://react-learning.ru/image-compressed/default-image.jpg</label>
            <input className={styles.input}
              defaultValue={userData.avatar}
              onChange={(e) => {setAvatar(e.target.value)}}
              placeholder='Здесь Вы можете обновить свой аватар'
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
          />
      </div>
      <Button title="Выход" route="/" />
    </section>
  )
}

export default EditProfile;