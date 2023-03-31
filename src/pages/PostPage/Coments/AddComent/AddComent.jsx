import { Form } from "./Form";
import styles from './add.module.css'
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import ModalPost from "../../../../components/ModalPost/ModalPost";

export function AddComent({token}) {

    const [modalActive, setModalActive] = useState(false);
    console.log(token);
    

    return (
        <>
        <Button title="Добавить комментарий"  fn ={()=>setModalActive(true)} className={styles.buttonLong}/>

        <ModalPost active={modalActive} setActive={setModalActive}>
            <h3>Проба</h3> 
        </ModalPost>
        </>
    )
}