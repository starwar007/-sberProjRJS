import styles from './search.module.css';
import {ReactComponent as SearchIcon} from './ic-search.svg';
import {ReactComponent as CloseIcon} from './ic-close-input.svg';
import { useState } from 'react';


function Search({onSubmit: propsOnSubmit, onInput}) {
  const [inputText, setInputText] = useState('')
  
  const handleInput = (e) => {
    setInputText(e.target.value)
    onInput && onInput(e.target.value)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    propsOnSubmit(inputText)
    // setInputText("")
  }

  const handleClearInput = (e) => {
    e.stopPropagation()
    setInputText("");
    onInput && onInput("");

    window.location.reload();
  }

  return (
   <form className={styles.search} onSubmit={handleFormSubmit}>
        <input type="text" value={inputText} className={styles.search__input} placeholder='Поиск (жми ENTER)' onInput={handleInput}/>
        <button type='button' className={styles.search__btn}>
          {inputText && <CloseIcon onClick={handleClearInput} className={styles.search__icon_clear}/>}
          {inputText && <SearchIcon onClick={handleFormSubmit} className={styles.search__icon}/>}
        </button>
   </form>
  )
}

export default Search;
