
import React from "react";
import styles from './button.module.css'
import { Link } from "react-router-dom";


// const Button = ({title, route, fn = Function.prototype}) => {
// const Button = ({title, route, fn }) => {
const Button = ({title, route, fn, className }) => {
    return (
        <Link to={route}>
            <button

                // className={styles.buttonLong}
                className={className}

                onClick={fn}
            >
            {title}
        </button>
        </Link>
        
    )
    
}

export default Button
