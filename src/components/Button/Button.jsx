
import React from "react";
import styles from './button.module.css'
import { Link } from "react-router-dom";


const Button = ({title, route, fn = Function.prototype}) => {
    return (
        <Link to={route}>
            <button
                className={styles.buttonLong} 
                onClick={fn}
            >
            {title}
        </button>
        </Link>
        
    )
    
}

export default Button
