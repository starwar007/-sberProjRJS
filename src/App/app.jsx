import { useState, useEffect } from 'react';
import styles from './app.module.css';
import api from '../utils/api';
import cn from "classnames";
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';

const App = () => {
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
    
  )

}

export default App;
