import styles from './editpost.module.css';
import Button from '../Button/Button';
import ModalPost from '../ModalPost/ModalPost';
import PostForm from '../PostForm/PostForm';
import api from '../../utils/api';
import { useState, useCallback, useEffect } from 'react';


const EditPost = (post) => {

    const [modalActive, setModalActive] = useState(false);

    return (
        <>
        <Button title="Редактировать пост"  fn ={()=>setModalActive(true)} className={styles.buttonLong}/>
        <ModalPost active={modalActive} setActive={setModalActive}>
              <PostForm
                setActive={setModalActive} 
                post={post}
                title='Редактировать пост'
                buttonTitle='Изменить данные' />
        </ModalPost>

        </>
    )

}

export default EditPost