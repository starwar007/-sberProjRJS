import React from "react";
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer1}>
        <div>Авторы проекта: </div>
      </div>
      <div className={styles.footer1}>
        <a href="https://github.com/chernyshevjuv">Чернышев Юрий - GitHub</a>
        <a href="https://github.com/MikeChe419">Лях Михаил - GitHub</a>
        <a href="https://github.com/starwar007">Васильев Алексей - GitHub</a>
        <a href="https://github.com/AndreyT-v">Тумбаев Андрей - GitHub</a>
       </div> 
      <div className={styles.footer1}>   
         <div>2023 ©</div>
      </div>   
    </footer>
  );
};

export default Footer;
