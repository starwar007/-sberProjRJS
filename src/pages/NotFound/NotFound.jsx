import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from './img/ic-notfound.svg';
import styles from './notFound.module.css';
// import Button from "../../components/Button/Button";



export const NotFound = () => {
	const navigate = useNavigate ()
	return (
	
	 <div className = {styles.notFound}>
      <img src={notFound} className={styles.image} aria-hidden="true" alt="" />
      Простите, ничего не найдено. <button onClick={() => navigate("/")}>На Главную</button>
	 </div>

	);
}

