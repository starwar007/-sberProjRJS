import { useState, useEffect } from 'react';
import styles from './app.module.css';
import {Header} from '../Header/Header';

import api from '../../utils/api';



function App() {

  const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    Promise.all([api.getUserInfo()])
      .then(([userData])=> {
        setCurrentUser(userData)
      })
      .catch( err => console.log(err))
  },[])

  function handleUpdateUser(userUpdateData) {
    api.setUserInfo(userUpdateData)
      .then((newUserData) => {
        setCurrentUser(newUserData)
      })
  }


  return (
    <>
    {/* <div className={styles.container}> */}


      {/* <Header/> */}

      <Header user={currentUser} onUpdateUser={handleUpdateUser}>

      </Header>
      {/* <Header user={currentUser} onUpdateUser={handleUpdateUser}>
      </Header> */}
      

    {/* </div> */}
    </>
  )
}

export default App;
