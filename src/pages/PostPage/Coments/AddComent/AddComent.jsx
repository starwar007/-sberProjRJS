import styles from './add.module.css'
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import ModalPost from "../../../../components/ModalPost/ModalPost";
import api from '../../../../utils/api';

export function AddComent({token,PostId}) {

    const [modalActive, setModalActive] = useState(false);
    
    const sendComentPost = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);    

        const formJson = Object.fromEntries(formData.entries());
        const valueForm = formJson.text
    
        if ((valueForm !== '' && valueForm !== null) && (!!valueForm.trim())) {
            setModalActive(false)
            api.setToken(token)
            api.createComment(PostId, formJson)
            e.target.reset();
        } else setModalActive(true)

    }


    return (
        <>
        <Button title="Добавить комментарий"  fn ={()=>setModalActive(true)} className={styles.buttonLong}/>

        <ModalPost active={modalActive} setActive={setModalActive}>
                <form className={styles.form} onSubmit={sendComentPost}>
                    <textarea className={styles.indent}
                        name="text"
                        placeholder='Напишите комментарий'
                        rows={4}
                        cols={50}
                    />
                    <button  className={styles.buttonLong} onClick={() => {setModalActive(false)}}>Отправить комментарий</button>    
                </form> 
        </ModalPost>
        </>
    )
}