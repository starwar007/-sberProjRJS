
import React from "react";
import styles from './buttondelete.module.css'
import { Link } from "react-router-dom";

const ButtonDelete = ({title, route, fn, className }) => {
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

export default ButtonDelete
