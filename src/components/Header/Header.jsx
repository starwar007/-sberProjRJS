import React from "react";
import styles from "./header.module.css";
import cn from "classnames";
import api from "../../utils/api";
import { useState, useEffect } from 'react';
import './Search.css';
import { ReactComponent as SearchIcon } from './ic-search.svg';
import { ReactComponent as CloseIcon } from './ic-close-input.svg';
import Button from "../Button/Button";

export function Header({ onSubmit: propsOnSubmit, onInput }) {

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


  if (!page0) {
    return (
      <>
        <header className={cn(styles.header)}>
          <div className={styles.container}>
            <div className={styles.flex} style={{ flexDirection: 'column', marginBottom: '20px' }}>
              <a className={styles.logo}>
                <img 
                  style={{ width: '100px', marginTop: '20px' }}
                  src='https://cdn2.iconfinder.com/data/icons/computer-science-butterscotch-vol-2-1/512/Programming-1024.png' />
                <div style={{ color: 'red', fontSize: '50px' }}>Реактивные посты</div>
              </a>
              <Button title="Меню Авторизации" setPage={setPage0}/>
              <div className={styles.Iam}>
                  
                {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* <button className={styles.buttonLong} style={{ marginTop: '30px' }}
                    onClick={() => {
                      setPage0(1);
                    }}>Меню авторизации</button> }
                </div> */}
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }

  if (page0 && !userToken && !userTokenGen) {
    return (
      <>
        <header className={cn(styles.header)}>
          <div className={styles.container}>
            <div className={styles.flex} style={{ flexDirection: 'column', marginBottom: '20px' }}>
              <a className={styles.logo}>
                <img style={{ width: '100px', marginTop: '20px' }}
                  src='https://cdn2.iconfinder.com/data/icons/computer-science-butterscotch-vol-2-1/512/Programming-1024.png' />
                {/* <img style={{ width: '100px', marginTop: '20px' }}
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM3LjMsMTQuMUgzMmMtMC42LDAtMSwwLjQtMSwxdjEyYzAsMC42LDAuNCwxLDEsMWgxLjhjMC4yLDAsMC4zLDAsMC40LTAuMWgzLjFjMS41LDAsMi44LTEuMywyLjgtMi44di04LjMKCQkJQzQwLjEsMTUuNCwzOC44LDE0LjEsMzcuMywxNC4xeiBNMzguMSwyNS4yYzAsMC40LTAuNCwwLjgtMC44LDAuOGgtMy41Yy0wLjEsMC0wLjMsMC0wLjQsMC4xSDMzdi0xMGwwLDBoNC4zCgkJCWMwLjQsMCwwLjgsMC40LDAuOCwwLjhWMjUuMnoiLz4KCQk8cGF0aCBkPSJNNTAsMjZoLTZ2LTRoNnYtMmgtNnYtNGg2di0yaC03Yy0wLjYsMC0xLDAuNC0xLDF2MTJjMCwwLjYsMC40LDEsMSwxaDdWMjZ6Ii8+CgkJPHBhdGggZD0iTTI5LDE2YzAtMS4yLTAuOC0yLTItMmgtNWMtMS4yLDAtMiwwLjgtMiwydjEwYzAsMS4yLDAuOCwyLDIsMmg1YzEuMiwwLDItMC44LDItMlYxNnogTTI3LDI2aC01VjE2aDVWMjZ6Ii8+CgkJPHBhdGggZD0iTTE4LDI1aC0yYzAsMC42LTAuNCwxLTEsMWgtM2MtMC42LDAtMS0wLjQtMS0xdi04YzAtMC42LDAuNC0xLDEtMWgzYzAuNiwwLDEsMC40LDEsMWgyYzAtMS43LTEuMy0zLTMtM2gtMwoJCQljLTEuNywwLTMsMS4zLTMsM3Y4YzAsMS43LDEuMywzLDMsM2gzQzE2LjcsMjgsMTgsMjYuNywxOCwyNXoiLz4KCQk8cGF0aCBkPSJNNTksMEgxQzAuNCwwLDAsMC40LDAsMXY0NmMwLDAuNiwwLjQsMSwxLDFoMjJ2MTBoLTN2Mmg0aDEyaDR2LTJoLTNWNDhoMjJjMC42LDAsMS0wLjQsMS0xVjFDNjAsMC40LDU5LjYsMCw1OSwweiBNMzUsNTgKCQkJSDI1VjQ4aDEwVjU4eiBNNTgsNDZIMzZIMjRIMnYtOGgzaDUwaDNWNDZ6IE02LDM2VjZoNDh2MzBINnogTTU4LDM2aC0yVjVjMC0wLjYtMC40LTEtMS0xSDVDNC40LDQsNCw0LjQsNCw1djMxSDJWMmg1NlYzNnoiLz4KCQk8cmVjdCB4PSI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjEzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjIxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjMzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjM3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjkiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIxMyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMjEiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIyNSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMzMiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIzNyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iNDUiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSI0OSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                  alt="logo" /> */}
                <div style={{ color: 'red', fontSize: '50px' }}>Реактивные посты</div>
              </a>
              <div className={styles.MenuAutorization}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto' }}>
                    <h2 style={{ color: '#23a030' }}><u>МЕНЮ АВТОРИЗАЦИИ</u></h2>
                  </div>
                  <span style={{ fontWeight: 'bold' }}>Авторизоваться с помощью токена (ввести токен без ковычек).</span>
                  <span>Визуально токен в поле может отображается не полностью</span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <textarea type="text" name="textarea" id="token1" required placeholder="Токен" cols="64" rows="4" autocomplete="off" />
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
                    <input type="password1" name="password1" id="password1" required placeholder="Пароль" size="19" autocomplete="off" />
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
                    <input type="password2" name="password2" id="password2" required placeholder="Пароль" size="19" autocomplete="off" />
                    <input type="email" name="email2" id="email2" required placeholder="Эл. почта" size="19" autocomplete="off" />
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
            </div>
          </div>
        </header>
      </>
    )
  }

  if (page0 && userTokenGen && !userToken) {
    console.log(userTokenGen);
    return (
      <>
        <header className={cn(styles.header)}>
          <div className={styles.container}>
            <div className={styles.flex} style={{ flexDirection: 'column', marginBottom: '20px' }}>
              <a className={styles.logo}>
                <img style={{ width: '100px', marginTop: '20px' }}
                  src='https://cdn2.iconfinder.com/data/icons/computer-science-butterscotch-vol-2-1/512/Programming-1024.png' />
                {/* <img style={{ width: '100px', marginTop: '20px' }}
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM3LjMsMTQuMUgzMmMtMC42LDAtMSwwLjQtMSwxdjEyYzAsMC42LDAuNCwxLDEsMWgxLjhjMC4yLDAsMC4zLDAsMC40LTAuMWgzLjFjMS41LDAsMi44LTEuMywyLjgtMi44di04LjMKCQkJQzQwLjEsMTUuNCwzOC44LDE0LjEsMzcuMywxNC4xeiBNMzguMSwyNS4yYzAsMC40LTAuNCwwLjgtMC44LDAuOGgtMy41Yy0wLjEsMC0wLjMsMC0wLjQsMC4xSDMzdi0xMGwwLDBoNC4zCgkJCWMwLjQsMCwwLjgsMC40LDAuOCwwLjhWMjUuMnoiLz4KCQk8cGF0aCBkPSJNNTAsMjZoLTZ2LTRoNnYtMmgtNnYtNGg2di0yaC03Yy0wLjYsMC0xLDAuNC0xLDF2MTJjMCwwLjYsMC40LDEsMSwxaDdWMjZ6Ii8+CgkJPHBhdGggZD0iTTI5LDE2YzAtMS4yLTAuOC0yLTItMmgtNWMtMS4yLDAtMiwwLjgtMiwydjEwYzAsMS4yLDAuOCwyLDIsMmg1YzEuMiwwLDItMC44LDItMlYxNnogTTI3LDI2aC01VjE2aDVWMjZ6Ii8+CgkJPHBhdGggZD0iTTE4LDI1aC0yYzAsMC42LTAuNCwxLTEsMWgtM2MtMC42LDAtMS0wLjQtMS0xdi04YzAtMC42LDAuNC0xLDEtMWgzYzAuNiwwLDEsMC40LDEsMWgyYzAtMS43LTEuMy0zLTMtM2gtMwoJCQljLTEuNywwLTMsMS4zLTMsM3Y4YzAsMS43LDEuMywzLDMsM2gzQzE2LjcsMjgsMTgsMjYuNywxOCwyNXoiLz4KCQk8cGF0aCBkPSJNNTksMEgxQzAuNCwwLDAsMC40LDAsMXY0NmMwLDAuNiwwLjQsMSwxLDFoMjJ2MTBoLTN2Mmg0aDEyaDR2LTJoLTNWNDhoMjJjMC42LDAsMS0wLjQsMS0xVjFDNjAsMC40LDU5LjYsMCw1OSwweiBNMzUsNTgKCQkJSDI1VjQ4aDEwVjU4eiBNNTgsNDZIMzZIMjRIMnYtOGgzaDUwaDNWNDZ6IE02LDM2VjZoNDh2MzBINnogTTU4LDM2aC0yVjVjMC0wLjYtMC40LTEtMS0xSDVDNC40LDQsNCw0LjQsNCw1djMxSDJWMmg1NlYzNnoiLz4KCQk8cmVjdCB4PSI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjEzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjIxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjMzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjM3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjkiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIxMyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMjEiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIyNSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMzMiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIzNyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iNDUiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSI0OSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                  alt="logo" /> */}
                <div style={{ color: 'red', fontSize: '50px' }}>Реактивные посты</div>
              </a>
              <div className={styles.Iam}>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '40px' }}>
                  <h3 style={{ fontWeight: 'bold' }}>Авторизоваться с помощью сгенерированного токена.</h3>
                  <span>Не забудьте скопировать токен через буфер обмена и сохранить<br /> Визуально токен в поле может отображается не полностью. </span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <textarea type="text" name="textarea" id="token2" required placeholder="Токен" cols="64" rows="4" value={userTokenGen} autocomplete="off" readonly />
                    <button className={styles.buttonIn} style={{ marginTop: '10px' }} onClick={() => {
                      console.log(document.querySelector('#token2').value);
                      api.setToken(document.querySelector('#token2').value);
                      setUserToken(document.querySelector('#token2').value);
                    }}>Авторизоваться</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }

  if (page0 && !currentUser && userToken) {
    //alert('Вы ввели неверный токен');
    return (
      <header className={cn(styles.header)}>
        <div className={styles.container}>
          <div className={styles.flex} style={{ flexDirection: 'column' }}>
            <a className={styles.logo}>
              <img style={{ width: '100px', marginTop: '20px' }}
                src='https://cdn2.iconfinder.com/data/icons/computer-science-butterscotch-vol-2-1/512/Programming-1024.png' />
              {/* <img style={{ width: '100px', marginTop: '20px' }}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM3LjMsMTQuMUgzMmMtMC42LDAtMSwwLjQtMSwxdjEyYzAsMC42LDAuNCwxLDEsMWgxLjhjMC4yLDAsMC4zLDAsMC40LTAuMWgzLjFjMS41LDAsMi44LTEuMywyLjgtMi44di04LjMKCQkJQzQwLjEsMTUuNCwzOC44LDE0LjEsMzcuMywxNC4xeiBNMzguMSwyNS4yYzAsMC40LTAuNCwwLjgtMC44LDAuOGgtMy41Yy0wLjEsMC0wLjMsMC0wLjQsMC4xSDMzdi0xMGwwLDBoNC4zCgkJCWMwLjQsMCwwLjgsMC40LDAuOCwwLjhWMjUuMnoiLz4KCQk8cGF0aCBkPSJNNTAsMjZoLTZ2LTRoNnYtMmgtNnYtNGg2di0yaC03Yy0wLjYsMC0xLDAuNC0xLDF2MTJjMCwwLjYsMC40LDEsMSwxaDdWMjZ6Ii8+CgkJPHBhdGggZD0iTTI5LDE2YzAtMS4yLTAuOC0yLTItMmgtNWMtMS4yLDAtMiwwLjgtMiwydjEwYzAsMS4yLDAuOCwyLDIsMmg1YzEuMiwwLDItMC44LDItMlYxNnogTTI3LDI2aC01VjE2aDVWMjZ6Ii8+CgkJPHBhdGggZD0iTTE4LDI1aC0yYzAsMC42LTAuNCwxLTEsMWgtM2MtMC42LDAtMS0wLjQtMS0xdi04YzAtMC42LDAuNC0xLDEtMWgzYzAuNiwwLDEsMC40LDEsMWgyYzAtMS43LTEuMy0zLTMtM2gtMwoJCQljLTEuNywwLTMsMS4zLTMsM3Y4YzAsMS43LDEuMywzLDMsM2gzQzE2LjcsMjgsMTgsMjYuNywxOCwyNXoiLz4KCQk8cGF0aCBkPSJNNTksMEgxQzAuNCwwLDAsMC40LDAsMXY0NmMwLDAuNiwwLjQsMSwxLDFoMjJ2MTBoLTN2Mmg0aDEyaDR2LTJoLTNWNDhoMjJjMC42LDAsMS0wLjQsMS0xVjFDNjAsMC40LDU5LjYsMCw1OSwweiBNMzUsNTgKCQkJSDI1VjQ4aDEwVjU4eiBNNTgsNDZIMzZIMjRIMnYtOGgzaDUwaDNWNDZ6IE02LDM2VjZoNDh2MzBINnogTTU4LDM2aC0yVjVjMC0wLjYtMC40LTEtMS0xSDVDNC40LDQsNCw0LjQsNCw1djMxSDJWMmg1NlYzNnoiLz4KCQk8cmVjdCB4PSI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjEzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjIxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjMzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjM3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjkiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIxMyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMjEiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIyNSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMzMiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIzNyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iNDUiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSI0OSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                alt="logo" /> */}
              <div style={{ color: 'red', fontSize: '50px' }}>Реактивные посты</div>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
              <div style={{ fontWeight: 'bold' }}><h2>Вы ввели неверный токен!</h2></div>
              <button className={styles.buttonLong} onClick={() => { setUserToken(''); setUserTokenGen(''); setCurrentUser(''); api.setToken('') }}>
                Попробовать зайти снова
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  }

  if (page0 && currentUser) {
    //alert(`Добро пожаловать ${currentUser.name}`);
    return (
      <>
        <header className={cn(styles.headerIn)}>
          <div className={styles.container}>
            <div className={styles.flex}>
              <a className={styles.logo}>
                <img style={{ width: '100px', marginTop: '10px' }}
                  src='https://cdn2.iconfinder.com/data/icons/computer-science-butterscotch-vol-2-1/512/Programming-1024.png' />
                {/* <img style={{ width: '50px', marginTop: '0px' }}
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM3LjMsMTQuMUgzMmMtMC42LDAtMSwwLjQtMSwxdjEyYzAsMC42LDAuNCwxLDEsMWgxLjhjMC4yLDAsMC4zLDAsMC40LTAuMWgzLjFjMS41LDAsMi44LTEuMywyLjgtMi44di04LjMKCQkJQzQwLjEsMTUuNCwzOC44LDE0LjEsMzcuMywxNC4xeiBNMzguMSwyNS4yYzAsMC40LTAuNCwwLjgtMC44LDAuOGgtMy41Yy0wLjEsMC0wLjMsMC0wLjQsMC4xSDMzdi0xMGwwLDBoNC4zCgkJCWMwLjQsMCwwLjgsMC40LDAuOCwwLjhWMjUuMnoiLz4KCQk8cGF0aCBkPSJNNTAsMjZoLTZ2LTRoNnYtMmgtNnYtNGg2di0yaC03Yy0wLjYsMC0xLDAuNC0xLDF2MTJjMCwwLjYsMC40LDEsMSwxaDdWMjZ6Ii8+CgkJPHBhdGggZD0iTTI5LDE2YzAtMS4yLTAuOC0yLTItMmgtNWMtMS4yLDAtMiwwLjgtMiwydjEwYzAsMS4yLDAuOCwyLDIsMmg1YzEuMiwwLDItMC44LDItMlYxNnogTTI3LDI2aC01VjE2aDVWMjZ6Ii8+CgkJPHBhdGggZD0iTTE4LDI1aC0yYzAsMC42LTAuNCwxLTEsMWgtM2MtMC42LDAtMS0wLjQtMS0xdi04YzAtMC42LDAuNC0xLDEtMWgzYzAuNiwwLDEsMC40LDEsMWgyYzAtMS43LTEuMy0zLTMtM2gtMwoJCQljLTEuNywwLTMsMS4zLTMsM3Y4YzAsMS43LDEuMywzLDMsM2gzQzE2LjcsMjgsMTgsMjYuNywxOCwyNXoiLz4KCQk8cGF0aCBkPSJNNTksMEgxQzAuNCwwLDAsMC40LDAsMXY0NmMwLDAuNiwwLjQsMSwxLDFoMjJ2MTBoLTN2Mmg0aDEyaDR2LTJoLTNWNDhoMjJjMC42LDAsMS0wLjQsMS0xVjFDNjAsMC40LDU5LjYsMCw1OSwweiBNMzUsNTgKCQkJSDI1VjQ4aDEwVjU4eiBNNTgsNDZIMzZIMjRIMnYtOGgzaDUwaDNWNDZ6IE02LDM2VjZoNDh2MzBINnogTTU4LDM2aC0yVjVjMC0wLjYtMC40LTEtMS0xSDVDNC40LDQsNCw0LjQsNCw1djMxSDJWMmg1NlYzNnoiLz4KCQk8cmVjdCB4PSI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjEzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjIxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjMzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjM3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjkiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIxMyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMjEiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIyNSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMzMiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIzNyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iNDUiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSI0OSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                  alt="logo" /> */}
                <div style={{ color: 'red', fontSize: '30px' }}>Реактивные посты</div>
              </a>

              <form className="search" onSubmit={propsOnSubmit}>
                <input type="text" className='search__input' placeholder='Поиск' onInput={handleInput}/>
                <button className='search__btn'>
                  <SearchIcon />
                  {false && <CloseIcon />}
                </button>
              </form>

              <div>
                <div className={styles.currentUser}>
                  <span>
                    <img className={styles.avatarIcon} src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a4e5138f-f147-436a-ba06-3e55ecb8099c/3840x" />
                  </span>
                  <div>
                    {currentUser?.email && <div>{currentUser?.email}</div>}
                    {currentUser?.name && <div>{currentUser?.name}</div>}
                    <button className={styles.buttonIn} onClick={() => { setUserToken(''); setUserTokenGen(''); setCurrentUser(''); api.setToken(''); setPage0(''); }}>Выйти</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}

export default Header;