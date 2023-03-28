
import React from "react";
import styles from './button.module.css'
import { Link } from "react-router-dom";

const Button = ({title, route, fn, className }) => {
    return (
        <Link to={route}>
            <button
                className={className}
                onClick={fn}
            >
            {title}
        </button>
        </Link>
        
    )
    
}

export default Button
