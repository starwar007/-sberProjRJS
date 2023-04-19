import styles from './editpost.module.css';
import Button from '../Button/Button';
import ModalPost from '../ModalPost/ModalPost';
import PostForm from '../PostForm/PostForm';
import { useState, useCallback, useEffect, useContext } from 'react';
import { CardContext } from '../../context/cardContext';

const EditPost = () => {
    const {post, editModalActive, setEditModalActive,} = useContext(CardContext);

    return (
        <>
        <Button title="Редактировать пост"  fn ={()=> 
            {setEditModalActive(true)
                console.log(post)}
            
        } 
            className={styles.buttonLong}/>
        <ModalPost active={editModalActive} setActive={setEditModalActive}>
              <PostForm
                title='Редактировать пост'
                buttonTitle='Изменить данные'/>
        </ModalPost>

        </>
    )

}

export default EditPost