import React from "react";
import { useState, useEffect } from 'react';
import api from "../../utils/api";
import styles from './authorization.module.css'

const Auth = ({ onSubmit: propsOnSubmit, onInput }) => {

    const handleInput = (e) => {
        onInput(e.target.value)
      }
    
    
      const [page0, setPage0] = useState('');
      const [userToken, setUserToken] = useState('');
      const [userTokenGen, setUserTokenGen] = useState('');
      const [currentUser, setCurrentUser] = useState('');
    
    
    
    
      useEffect(() => {
        Promise.all([api.getUserInfo()])
          .then(([userData]) => {
            setCurrentUser(userData)
          })
          .catch(err => console.log(err))
      }, [userToken])

    return (
        <div className={styles.MenuAutorization}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto' }}>
                    <h2 style={{ color: '#23a030' }}><u>МЕНЮ АВТОРИЗАЦИИ</u></h2>
                  </div>
                  <span style={{ fontWeight: 'bold' }}>Авторизоваться с помощью токена (ввести токен без ковычек).</span>
                  <span>Визуально токен в поле может отображается не полностью</span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <textarea type="text" name="textarea" id="token1" required placeholder="Токен" cols="64" rows="4" autoComplete="off" />
                    <button className={styles.buttonIn} style={{ marginTop: '5px', marginBottom: '10px' }}
                      onClick={() => {
                        console.log(document.querySelector('#token1').value);
                        api.setToken(document.querySelector('#token1').value);
                        setUserToken(document.querySelector('#token1').value);
                      }}>Авторизоваться</button>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                  <span style={{ fontWeight: 'bold' }}>Нет токена? Cгенерируйте его! Введите регистрационные данные</span>
                  <span style={{ fontSize: '15px' }}>ВЫПОЛНЯТЬ В ТОМ СЛУЧАЕ, ЕСЛИ ТОКЕНА ДЛЯ ВАШЕЙ УЧЕТНОЙ<br /> ЗАПИСИ НЕ БЫЛО, УТЕРЯН ИЛИ ИСТЕК СРОК ДЕЙСТВИЯ!</span>
                  <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <input type="password1" name="password1" id="password1" required placeholder="Пароль" size="19" autoComplete="off" />
                    <input type="email" name="email1" id="email1" required placeholder="Эл. почта" size="19" />
                    <button onClick={() => {
                      api.signIn(document.querySelector('#email1').value, document.querySelector('#password1').value)
                        .then(response => response.json()).then((response) => {
                          console.log(response);
                          if (response.token === undefined) { alert('Неверная эл. почта или пароль') }
                          else {
                            alert(`Ваш токен, ${document.querySelector('#email1').value}, сгенерирован (скопировать Вы его можете из поля на следующей странице или консоли F12): ${response.token}`);
                            console.log(response.token); setUserTokenGen(response.token)
                          }
                        });
                    }}>Сгенерировать токен</button>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                <button className={styles.buttonLong} style={{ marginTop: '30px' }} onClick={() => { setUserToken(''); setUserTokenGen(''); setCurrentUser(''); api.setToken(''); setPage0(''); }}>Выйти</button>
              </div>
    )
}

export default Auth