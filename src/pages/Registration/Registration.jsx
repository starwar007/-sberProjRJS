import React from "react";
import { useState, useEffect } from 'react';
import api from "../../utils/api";
import styles from './registration.module.css'
import Button from "../../components/Button/Button";
// import cn from "classnames";

const Registration = ({ onSubmit: propsOnSubmit, onInput }) => {

  const handleInput = (e) => {
    onInput(e.target.value)
  }

  // const [userToken, setUserToken] = useState('');
  // const [userTokenGen, setUserTokenGen] = useState('');
  // const [currentUser, setCurrentUser] = useState('');

  function Exit() {
    // setUserToken('');
    // setUserTokenGen('');
    // setCurrentUser('');
    // api.setToken('');
  }


  function LogReg() {
  }











  // useEffect(() => {
  //   Promise.all([api.getUserInfo()])
  //     .then(([userData]) => {
  //       setCurrentUser(userData)
  //     })
  //     .catch(err => console.log(err))
  // }, [userToken])


  // if (!userToken && !userTokenGen) {
  // if (!userToken && !userTokenGen) {

  return (
    <section className={styles.autorization}>
      {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto' }}>
            <h2 style={{ color: '#23a030' }}><u>МЕНЮ АВТОРИЗАЦИИ</u></h2>
          </div>
          <span style={{ fontWeight: 'bold' }}>Авторизоваться с помощью токена (ввести токен без ковычек).</span>
          <span>Визуально токен в поле может отображается не полностью</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}> */}

      {/* <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}> */}

      {/* <textarea type="text" name="textarea" id="token1" required placeholder="Токен" cols="64" rows="4" autoComplete="off" /> */}

      {/* <textarea type="text" name="textarea" id="token1" required placeholder="Токен" cols="64" rows="4" autoComplete="off" style={{ marginBottom: '5px' }}/> */}
      {/* <button className={styles.buttonIn} style={{ margin: 'auto', marginTop: '5px', marginBottom: '10px', width: '120px' }} */}

      {/* <button style={{ margin: 'auto', marginTop: '5px', marginBottom: '10px', width: '120px' }}
              onClick={() => {
                console.log(document.querySelector('#token1').value);
                api.setToken(document.querySelector('#token1').value);
                setUserToken(document.querySelector('#token1').value);
              }}>Авторизоваться</button> */}

      {/* <ButtonExit title="Авторизоваться" route="/" /> */}

      {/* </div>
        </div> */}

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto' }}>
          <h2 style={{ color: '#23a030' }}><u>МЕНЮ РЕГИСТРАЦИИ</u></h2>
        </div>
        {/* <span style={{ fontWeight: 'bold' }}>Нет токена? Cгенерируйте его! Введите регистрационные данные</span>
          <span style={{ fontSize: '15px' }}>ВЫПОЛНЯТЬ В ТОМ СЛУЧАЕ, ЕСЛИ ТОКЕНА ДЛЯ ВАШЕЙ УЧЕТНОЙ<br /> ЗАПИСИ НЕ БЫЛО, УТЕРЯН ИЛИ ИСТЕК СРОК ДЕЙСТВИЯ!</span> */}
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <input type="password2" name="password2" id="password2" required placeholder="Пароль" size="19" autoComplete="off" />
          <input type="email" name="email2" id="email2" required placeholder="Эл. почта" size="19" />

          {/* <button onClick={() => {
              api.signIn(document.querySelector('#email1').value, document.querySelector('#password1').value)
                .then(response => response.json()).then((response) => {
                  console.log(response);
                  if (response.token === undefined) { alert('Неверная эл. почта или пароль') }
                  else {
                    alert(`Ваш токен, ${document.querySelector('#email1').value}, сгенерирован (скопировать Вы его можете из поля на следующей странице или консоли F12): ${response.token}`);
                    console.log(response.token); setUserTokenGen(response.token)
                  }
                });
            }}>Сгенерировать токен</button> */}

          <Button title="Зарегистрироваться" route="/" fn={LogReg} className={styles.button} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', marginTop: '30px' }}>
          <Button title="Выход" route="/" fn={Exit} className={styles.button} />
        </div>
      </div>



      {/* <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
          <span style={{ fontWeight: 'bold' }}>Нет регистрационных данных? Зарегистрируйтесь на сайте!</span>
          <span>Не забудьте введенную Вашу эл. почту и пароль </span>
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <input type="password2" name="password2" id="password2" required placeholder="Пароль" size="19" autoComplete="off" />
            <input type="email" name="email2" id="email2" required placeholder="Эл. почта" size="19" autoComplete="off" />
            <button style={{ padding: '0px 8px 0px 8px' }}
              onClick={() => {

                let body = {
                  'email': `${document.querySelector('#email2').value}`,
                  'group': "group-10",
                  'password': `${document.querySelector('#password2').value}`
                }
                api.signUp(body)
                  .then(response => response.json()).then((response) => {
                    if (response.name === undefined) { alert('Некорректные данные эл. почты или пароля') }
                    else {
                      alert(`Вы зарегистированы с именем по умолчанию ${response.name}. Теперь Вы сможете по зарегистрированным данным, сгенерировать токен`);
                      console.log(response)
                    }
                  });
              }}>Зарегистрироваться</button>
            
          </div>
        </div>
        <Button title="Выход" route="/" fn={Exit} /> */}
    </section>
  )




  // if (userTokenGen && !userToken) {
  // if (userTokenGen && !userToken) {
  //   console.log(userTokenGen);
  //   // {document.querySelector('#token').value=userTokenGen;}
  //   return (
  //       <section className={styles.autorization}>
  //         <div style={{ display: 'flex', flexDirection: 'column', marginTop: '40px' }}>
  //           <h3 style={{ fontWeight: 'bold' }}>Авторизоваться с помощью сгенерированного токена.</h3>
  //           <span>Не забудьте скопировать токен через буфер обмена и сохранить<br /> Визуально токен в поле может отображается не полностью. </span>
  //           <div style={{ display: 'flex', flexDirection: 'column' }}>
  //             <textarea type="text" name="textarea" id="token2" required placeholder="Токен" cols="64" rows="4" value={userTokenGen} autocomplete="off" readonly />
  //             <button style={{ margin: 'auto', marginTop: '5px', marginBottom: '10px', width: '120px' }}
  //               onClick={() => {
  //               console.log(document.querySelector('#token2').value);
  //               api.setToken(document.querySelector('#token2').value);
  //               setUserToken(document.querySelector('#token2').value);
  //             }}>Авторизоваться</button>
  //           </div>
  //         </div>
  //       </section>
  //   )
  // }


  // if (!currentUser && userToken) {
  // if (!currentUser && userToken) {
  //   //alert('Вы ввели неверный токен');
  //   return (
  //     <section className={styles.autorization}>
  //       <div style={{ display: 'flex', flexDirection: 'column', marginTop: '40px' }}>
  //         <div style={{ fontWeight: 'bold' }}><h2>Вы ввели неверный токен!</h2></div>
  //             {/* <ButtonExit title="Выход" fnExit={Exit} /> */}
  //             <button style={{ margin: 'auto', marginTop: '5px', marginBottom: '10px', width: '200px' }}
  //               onClick={() => { setUserToken(''); setUserTokenGen(''); setCurrentUser(''); api.setToken('') }}>
  //               Попробовать зайти снова
  //             </button>
  //       </div>
  //     </section>
  //   )
  // }

  // if (currentUser) {
  // if (currentUser) {
  //   //alert(`Добро пожаловать ${currentUser.name}`);
  //   return (
  //     <>
  //       <section className={styles.autorization}>
  //         <div style={{ display: 'flex', flexDirection: 'column' }}>
  //                 <span>
  //                   <img className={styles.avatarIcon} src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a4e5138f-f147-436a-ba06-3e55ecb8099c/3840x" />
  //                 </span>
  //                 <div>
  //                   {currentUser?.email && <div>{currentUser?.email}</div>}
  //                   {currentUser?.name && <div>{currentUser?.name}</div>}
  //                   {/* <button className={styles.buttonIn} onClick={() => { setUserToken(''); setUserTokenGen(''); setCurrentUser(''); api.setToken('') }}>Выйти</button> */}
  //                   {/* <ButtonExit title="Выход" route="/" fnExit={Exit} /> */}
  //                   <Button title="Выход" route="/" fn={Exit} />
  //                 </div>
  //         </div>
  //       </section>
  //     </>
  //   )
  // }



}

export default Registration;