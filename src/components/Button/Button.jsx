
import React from "react";
import styles from './button.module.css'
import { Link } from "react-router-dom";


const Button = ({title, route, setActive}) => {
    return (
        <Link to={route}>
            <button
                className={styles.buttonLong} 
                onClick={() => setActive('true')}
            >
            {title}
        </button>
        </Link>
        
    )
    
}

export default Button
