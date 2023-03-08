import React from 'react';
import { useState, useEffect } from 'react';

import api from '../../utils/api';
import cn from "classnames";
import Footer from '../Footer/footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  return (
    <>
      <Header>
      {/* <Header onSubmit={handleFormSubmit} onInput={handleInputChange}> */}
      </Header>
      <Main></Main>
      <Footer />
    </>
  )
}

export default App;
