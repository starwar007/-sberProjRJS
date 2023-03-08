
import React from "react";
import styles from './button.module.css'


const Button = ({title, setPage}) => {
    return (
        <button
            className={styles.buttonLong} 
            style={{ marginTop: '30px' }}
            onClick={() => {setPage(1)}}>
            {title}
        </button>
    )
    
}

export default Button
