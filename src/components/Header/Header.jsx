import styles from "./header.module.css";
import cn from "classnames";
import api from "../../utils/api";

import { useState, useEffect } from 'react';

//setTimeout(() => alert('Для корректной работы Вам правильно нужно физически ввести TOKEN в файл api.js'), 1000);
export function Header({ user }) {


  const [userToken, setUserToken] = useState('');
  const [userTokenGen, setUserTokenGen] = useState('');
  //console.log(api._headers.Authorization);
  // api.setToken(userToken);
  //console.log(user?.name);

  // // const [userName, setUserName] = useState('');
  // const [userEmail, setUserEmail] = useState('');
  // // if(!userName){

  //if (!userEmail) {
  if (!userToken && !userTokenGen) { 
  // if (!userToken) {
    return (
      <>
        <header className={cn(styles.header)}>
          <div className={styles.container}>
            <div className={styles.flex} style={{ flexDirection: 'column', marginBottom: '20px'}}>
              <a className={styles.logo}>
                <img style={{ width: '100px', marginTop: '20px' }}
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM3LjMsMTQuMUgzMmMtMC42LDAtMSwwLjQtMSwxdjEyYzAsMC42LDAuNCwxLDEsMWgxLjhjMC4yLDAsMC4zLDAsMC40LTAuMWgzLjFjMS41LDAsMi44LTEuMywyLjgtMi44di04LjMKCQkJQzQwLjEsMTUuNCwzOC44LDE0LjEsMzcuMywxNC4xeiBNMzguMSwyNS4yYzAsMC40LTAuNCwwLjgtMC44LDAuOGgtMy41Yy0wLjEsMC0wLjMsMC0wLjQsMC4xSDMzdi0xMGwwLDBoNC4zCgkJCWMwLjQsMCwwLjgsMC40LDAuOCwwLjhWMjUuMnoiLz4KCQk8cGF0aCBkPSJNNTAsMjZoLTZ2LTRoNnYtMmgtNnYtNGg2di0yaC03Yy0wLjYsMC0xLDAuNC0xLDF2MTJjMCwwLjYsMC40LDEsMSwxaDdWMjZ6Ii8+CgkJPHBhdGggZD0iTTI5LDE2YzAtMS4yLTAuOC0yLTItMmgtNWMtMS4yLDAtMiwwLjgtMiwydjEwYzAsMS4yLDAuOCwyLDIsMmg1YzEuMiwwLDItMC44LDItMlYxNnogTTI3LDI2aC01VjE2aDVWMjZ6Ii8+CgkJPHBhdGggZD0iTTE4LDI1aC0yYzAsMC42LTAuNCwxLTEsMWgtM2MtMC42LDAtMS0wLjQtMS0xdi04YzAtMC42LDAuNC0xLDEtMWgzYzAuNiwwLDEsMC40LDEsMWgyYzAtMS43LTEuMy0zLTMtM2gtMwoJCQljLTEuNywwLTMsMS4zLTMsM3Y4YzAsMS43LDEuMywzLDMsM2gzQzE2LjcsMjgsMTgsMjYuNywxOCwyNXoiLz4KCQk8cGF0aCBkPSJNNTksMEgxQzAuNCwwLDAsMC40LDAsMXY0NmMwLDAuNiwwLjQsMSwxLDFoMjJ2MTBoLTN2Mmg0aDEyaDR2LTJoLTNWNDhoMjJjMC42LDAsMS0wLjQsMS0xVjFDNjAsMC40LDU5LjYsMCw1OSwweiBNMzUsNTgKCQkJSDI1VjQ4aDEwVjU4eiBNNTgsNDZIMzZIMjRIMnYtOGgzaDUwaDNWNDZ6IE02LDM2VjZoNDh2MzBINnogTTU4LDM2aC0yVjVjMC0wLjYtMC40LTEtMS0xSDVDNC40LDQsNCw0LjQsNCw1djMxSDJWMmg1NlYzNnoiLz4KCQk8cmVjdCB4PSI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjEzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjIxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjMzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjM3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjkiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIxMyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMjEiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIyNSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMzMiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIzNyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iNDUiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSI0OSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                  alt="logo" />
                <div style={{ color: 'blue', fontSize: '50px' }}>Реактивные посты</div>
              </a>

              

              <div className={styles.Iam}>

                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', marginTop: '40px'}}>
                    {/* <input type="login1" name="login1" id="login1" required placeholder="Логин"/> */}
                    <span style={{fontWeight: 'bold'}}>Авторизоваться с помощью токена (ввести токен без ковычек).</span>
                    <span>Визуально токен в поле отображается не полностью</span>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                      <input type="token" name="token" id="token" required placeholder="Токен" size="64" autocomplete="off"/>
                      <button className={styles.buttonIn}
                      // style={{margin: '10px 0px 10px 0px', padding: '10px 0px 10px 0px',   }}
                       onClick={() => { 
                        console.log(document.querySelector('#token').value);
                        api.setToken(document.querySelector('#token').value); 
                        setUserToken(document.querySelector('#token').value);
                        // myToken=document.querySelector('#token').value;
                        // return myToken;

                       }}>Авторизоваться</button>


                    </div>
                </div>    

                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                  {/* <input type="login1" name="login1" id="login1" required placeholder="Логин"/> */}
                  <span style={{fontWeight: 'bold'}}>Нет токена? Cгенерируйте его! Введите регистрационные данные</span>
                  <span style={{fontSize: '15px'}}>ВЫПОЛНЯТЬ В ТОМ СЛУЧАЕ, ЕСЛИ ТОКЕНА ДЛЯ ВАШЕЙ УЧЕТНОЙ<br/> ЗАПИСИ НЕ БЫЛО, УТЕРЯН ИЛИ ИСТЕК СРОК ДЕЙСТВИЯ!</span>
                  <div style={{ display: 'flex', flexDirection: 'row-reverse'}}>
                  <input type="password1" name="password1" id="password1" required placeholder="Пароль" size="19" autocomplete="off"/>
                  <input type="email1" name="email1" id="email1" required placeholder="Эл. почта" size="19"/>
                  {/* <button style={{padding: '0px 60px 0px 60px' }} onClick={() => setUserName(`${a}`)}>Войти</button> */}
                  {/* <button style={{padding: '0px 60px 0px 60px' }} onClick={() => {setUserName(`${document.querySelector('#login1').value}`);
                                       setUserEmail(`${document.querySelector('#login1').value}@yandex.ru`)}}>Авторизация</button> */}
                    
                  
                  
                  <button 
                  //style={{ padding: '0px 50px 0px 50px' }}
                  onClick={() => {
                    
                    let body = {
                      'email': `${document.querySelector('#email1').value}`,
                      'password': `${document.querySelector('#password1').value}`
                    }
                    fetch(`https://api.react-learning.ru/signin`, {
                      method: "POST",
                      headers: { 
                        // "Accept": "application/json",
                        "Content-Type": "application/json" },
                      body: JSON.stringify(body)
                    })
                    // .then(response => response.json()).then((response) => {setUserToken(response.token); console.log(response);
                    //   if(response.token === undefined) {alert('Неверный логин или пароль')}
                    //   else {setUserEmail(`${document.querySelector('#email1').value}`); 
                    //   api.setToken(response.token);
                    .then(response => response.json()).then((response) => {console.log(response);
                      if(response.token === undefined) {alert('Неверная эл. почта или пароль')}
                      else {alert(`Ваш токен, ${document.querySelector('#email1').value}, сгенерирован (скопировать Вы его можете из поля на следующей странице или консоли F12): ${response.token}`);
                      console.log(response.token); setUserTokenGen(response.token)}
                    });
                  }}>Сгенерировать токен</button>
                  </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column'}}>
                <span style={{fontWeight: 'bold'}}>Нет регистрационных данных? Зарегистрируйтесь на сайте!</span>
                <span>Не забудьте введенную Вашу эл. почту и пароль </span>
                  {/* <input type="login2" name="login2" id="login2" required placeholder="Имя"/> */}
                  <div style={{ display: 'flex', flexDirection: 'row-reverse'}}>
                  <input type="password2" name="password2" id="password2" required placeholder="Пароль" size="19" autocomplete="off"/>
                  <input type="email2" name="email2" id="email2" required placeholder="Эл. почта" size="19"/>
                  {/* <button onClick={() => {setUserName(`${document.querySelector('#login2').value}`);
                                       setUserEmail(`${document.querySelector('#email2').value}`)}}>Зарегистрироваться</button> */}
                  <button style={{ padding: '0px 8px 0px 8px' }}
                  onClick={() => {
                    let body = {
                      'email': `${document.querySelector('#email2').value}`,
                      "group": "group-10",
                      'password': `${document.querySelector('#password2').value}`
                    }
                    fetch(`https://api.react-learning.ru/signup`, {
                      method: "POST",
                      headers: { 
                        // "Accept": "application/json",
                        "Content-Type": "application/json" },
                      body: JSON.stringify(body)
                    })
                    // .then(response => response.json()).then((response) => {setUserToken(response.token); console.log(response);
                    //   if(response.token === undefined) {alert('Неверный логин или пароль')}
                    //   else {setUserEmail(`${document.querySelector('#email1').value}`); 
                    //   api.setToken(response.token);
                    .then(response => response.json()).then((response) => {
                      if(response.name === undefined) {alert('Некорректные данные эл. почты или пароля')}
                      else {alert(`Вы зарегистированы с именем по умолчанию ${response.name}. Теперь Вы сможете по зарегистрированным данным, сгенерировать токен`);
                      console.log(response)}
                    });
                    // setUserEmail(`${document.querySelector('#email2').value}`)
                  }}>Зарегистрироваться</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }


  if (userTokenGen && !userToken) { 
    console.log(userTokenGen);
    // {document.querySelector('#token').value=userTokenGen;}
      return (
        <>
          <header className={cn(styles.header)}>
            <div className={styles.container}>
              <div className={styles.flex} style={{ flexDirection: 'column', marginBottom: '20px'}}>
                <a className={styles.logo}>
                  <img style={{ width: '100px', marginTop: '20px' }}
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM3LjMsMTQuMUgzMmMtMC42LDAtMSwwLjQtMSwxdjEyYzAsMC42LDAuNCwxLDEsMWgxLjhjMC4yLDAsMC4zLDAsMC40LTAuMWgzLjFjMS41LDAsMi44LTEuMywyLjgtMi44di04LjMKCQkJQzQwLjEsMTUuNCwzOC44LDE0LjEsMzcuMywxNC4xeiBNMzguMSwyNS4yYzAsMC40LTAuNCwwLjgtMC44LDAuOGgtMy41Yy0wLjEsMC0wLjMsMC0wLjQsMC4xSDMzdi0xMGwwLDBoNC4zCgkJCWMwLjQsMCwwLjgsMC40LDAuOCwwLjhWMjUuMnoiLz4KCQk8cGF0aCBkPSJNNTAsMjZoLTZ2LTRoNnYtMmgtNnYtNGg2di0yaC03Yy0wLjYsMC0xLDAuNC0xLDF2MTJjMCwwLjYsMC40LDEsMSwxaDdWMjZ6Ii8+CgkJPHBhdGggZD0iTTI5LDE2YzAtMS4yLTAuOC0yLTItMmgtNWMtMS4yLDAtMiwwLjgtMiwydjEwYzAsMS4yLDAuOCwyLDIsMmg1YzEuMiwwLDItMC44LDItMlYxNnogTTI3LDI2aC01VjE2aDVWMjZ6Ii8+CgkJPHBhdGggZD0iTTE4LDI1aC0yYzAsMC42LTAuNCwxLTEsMWgtM2MtMC42LDAtMS0wLjQtMS0xdi04YzAtMC42LDAuNC0xLDEtMWgzYzAuNiwwLDEsMC40LDEsMWgyYzAtMS43LTEuMy0zLTMtM2gtMwoJCQljLTEuNywwLTMsMS4zLTMsM3Y4YzAsMS43LDEuMywzLDMsM2gzQzE2LjcsMjgsMTgsMjYuNywxOCwyNXoiLz4KCQk8cGF0aCBkPSJNNTksMEgxQzAuNCwwLDAsMC40LDAsMXY0NmMwLDAuNiwwLjQsMSwxLDFoMjJ2MTBoLTN2Mmg0aDEyaDR2LTJoLTNWNDhoMjJjMC42LDAsMS0wLjQsMS0xVjFDNjAsMC40LDU5LjYsMCw1OSwweiBNMzUsNTgKCQkJSDI1VjQ4aDEwVjU4eiBNNTgsNDZIMzZIMjRIMnYtOGgzaDUwaDNWNDZ6IE02LDM2VjZoNDh2MzBINnogTTU4LDM2aC0yVjVjMC0wLjYtMC40LTEtMS0xSDVDNC40LDQsNCw0LjQsNCw1djMxSDJWMmg1NlYzNnoiLz4KCQk8cmVjdCB4PSI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjEzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjIxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjMzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjM3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjkiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIxMyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMjEiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIyNSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMzMiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIzNyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iNDUiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSI0OSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                    alt="logo" />
                  <div style={{ color: 'blue', fontSize: '50px' }}>Реактивные посты</div>
                </a>
  
                
  
                <div className={styles.Iam}>
                  <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', marginTop: '40px'}}>
                      {/* <input type="login1" name="login1" id="login1" required placeholder="Логин"/> */}
                      <span style={{fontWeight: 'bold'}}>Авторизоваться с помощью сгенерированного токена.</span>
                      <span>Не забудьте скопировать токен через буфер обмена и сохранить<br/> Визуально токен в поле отображается не полностью. </span>
                      <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <input type="token" name="token" id="token" required placeholder="Токен" size="64" value={userTokenGen} autocomplete="off" readonly/> 
                        <button className={styles.buttonIn}
                        // style={{margin: '10px 0px 10px 0px', padding: '10px 0px 10px 0px',   }}
                         onClick={() => {}}>Авторизоваться</button>
                      </div>
                  </div>    
                 
                </div>
              </div>
            </div>
          </header>
        </>
      )
    }































  if (userToken) {
  return (
    <>
    <header className={cn(styles.header)}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <a className={styles.logo}>
            <img style={{ width: '50px', marginTop: '0px' }}
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM3LjMsMTQuMUgzMmMtMC42LDAtMSwwLjQtMSwxdjEyYzAsMC42LDAuNCwxLDEsMWgxLjhjMC4yLDAsMC4zLDAsMC40LTAuMWgzLjFjMS41LDAsMi44LTEuMywyLjgtMi44di04LjMKCQkJQzQwLjEsMTUuNCwzOC44LDE0LjEsMzcuMywxNC4xeiBNMzguMSwyNS4yYzAsMC40LTAuNCwwLjgtMC44LDAuOGgtMy41Yy0wLjEsMC0wLjMsMC0wLjQsMC4xSDMzdi0xMGwwLDBoNC4zCgkJCWMwLjQsMCwwLjgsMC40LDAuOCwwLjhWMjUuMnoiLz4KCQk8cGF0aCBkPSJNNTAsMjZoLTZ2LTRoNnYtMmgtNnYtNGg2di0yaC03Yy0wLjYsMC0xLDAuNC0xLDF2MTJjMCwwLjYsMC40LDEsMSwxaDdWMjZ6Ii8+CgkJPHBhdGggZD0iTTI5LDE2YzAtMS4yLTAuOC0yLTItMmgtNWMtMS4yLDAtMiwwLjgtMiwydjEwYzAsMS4yLDAuOCwyLDIsMmg1YzEuMiwwLDItMC44LDItMlYxNnogTTI3LDI2aC01VjE2aDVWMjZ6Ii8+CgkJPHBhdGggZD0iTTE4LDI1aC0yYzAsMC42LTAuNCwxLTEsMWgtM2MtMC42LDAtMS0wLjQtMS0xdi04YzAtMC42LDAuNC0xLDEtMWgzYzAuNiwwLDEsMC40LDEsMWgyYzAtMS43LTEuMy0zLTMtM2gtMwoJCQljLTEuNywwLTMsMS4zLTMsM3Y4YzAsMS43LDEuMywzLDMsM2gzQzE2LjcsMjgsMTgsMjYuNywxOCwyNXoiLz4KCQk8cGF0aCBkPSJNNTksMEgxQzAuNCwwLDAsMC40LDAsMXY0NmMwLDAuNiwwLjQsMSwxLDFoMjJ2MTBoLTN2Mmg0aDEyaDR2LTJoLTNWNDhoMjJjMC42LDAsMS0wLjQsMS0xVjFDNjAsMC40LDU5LjYsMCw1OSwweiBNMzUsNTgKCQkJSDI1VjQ4aDEwVjU4eiBNNTgsNDZIMzZIMjRIMnYtOGgzaDUwaDNWNDZ6IE02LDM2VjZoNDh2MzBINnogTTU4LDM2aC0yVjVjMC0wLjYtMC40LTEtMS0xSDVDNC40LDQsNCw0LjQsNCw1djMxSDJWMmg1NlYzNnoiLz4KCQk8cmVjdCB4PSI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjEzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjIxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjMzIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjM3IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ1IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQ5IiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjkiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIxMyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjE3IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMjEiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIyNSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjI5IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iMzMiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSIzNyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJCTxyZWN0IHg9IjQxIiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CgkJPHJlY3QgeD0iNDUiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KCQk8cmVjdCB4PSI0OSIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
              alt="logo" />
            {/* <div className={styles.title}>Реактивные посты</div> */}
            <div style={{ color: 'blue', fontSize: '30px' }}>Реактивные посты</div>
          </a>
          <div>
            <div className={styles.currentUser}>
              <span>
                {/* <img src="https://rexweyler.com/wp-content/uploads/2021/05/Rocket-Racoon-Marvel-1320x660.jpg" /> */}
                <img className={styles.avatarIcon} src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a4e5138f-f147-436a-ba06-3e55ecb8099c/3840x" />
              </span>
              <div>
                {/* <div>{userName}</div> */}
                {/* <div>{userEmail}</div> */}


                {/* <UserContext.Provider value={myToken}>
                </UserContext.Provider> */}


                {/* <button onClick={()=>setUserName('')}>Выйти</button> */}
                {/* <button onClick={() => {setUserEmail(''); setUserToken(undefined)}}>Выйти</button> */}


                {/* <div className = "myname">Yurii</div> */}

                {/* <div> */}

                {/* Yurii */}


                {/* {user?.name && <span>{user?.name}</span>}
                </div> */}


                {/* <div> */}
                {/* chernyshev@yandex.ru */}
                {/* {user?.email && <span>{user?.email}</span>} */}

                {/* <button
                    type="button"
                    className="ant-btn ant-btn-default"
                    ant-click-animating-without-extra-node="false"
                  >
                    <span>Войти</span>
                  </button> */}


                {/* <button
                    type="button"
                    className="ant-btn ant-btn-default"
                    ant-click-animating-without-extra-node="false"
                  >
                    <span>Зарегистрироваться</span>
                  </button> */}

                {/* <button
                    type="button"
                    className="ant-btn ant-btn-default"
                    ant-click-animating-without-extra-node="false"
                  >
                    <span>изменить</span>
                  </button> */}

                {/* </div>
                <div className="container"> */}
                {/* {props.receiveValue(5)} */}
                {user?.email && <div>{user?.email}</div>}
                {user?.name && <div>{user?.name}</div>}
                {/* <button>Выйти</button> */}
                <button onClick={()=>{setUserToken(''); setUserTokenGen('')}}>Выйти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
  }
}



// function Header_api(userToken)
//     {
//       if(userToken === undefined) {}
//       // else {alert(userToken); let myToken = userToken; return myToken} 
//       // else {alert(userToken); return userToken}
//       else {return userToken}   
//     } 

//     let myresult = Header_api(userToken);
//     alert(myresult);



    // function sum(a, b) {
    //   return a + b;
    // }
    
    // let result = sum(1, 2);
    // alert( result ); // 3

// export default Header_api; 