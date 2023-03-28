
import React from "react";
import styles from './button.module.css'
import { Link } from "react-router-dom";


// const Button = ({title, route, fn = Function.prototype}) => {
// const Button = ({title, route, fn }) => {
const Button = ({ title, route, fn, className }) => {
// const Button = ({title, route, setActive}) => {    
    return (
        <Link to={route}>
            <button

                // className={styles.buttonLong}
                className={className}

                onClick={fn}
                // onClick={() => setActive('true')}
            >
            {title}
        </button>
        </Link>
        
    )
    
}

export default Button
