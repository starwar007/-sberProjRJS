import styles from './editpost.module.css';
import Button from '../Button/Button';
import ModalPost from '../modalPost/ModalPost';
import PostForm from '../postForm/PostForm';
import {useContext, useCallback } from 'react';
import { CardContext } from '../../context/cardContext';
import api from '../../utils/api';

const EditPost = () => {
    const {post, setPost, editModalActive, setEditModalActive,} = useContext(CardContext);

    const editQuery = useCallback(() => {
        api.getPost(post._id)
        .then(res => setPost(res))
            setEditModalActive(true)  
    }, [setPost])
    return (
        <>
            <Button title="Редактировать пост"  
                fn ={editQuery} 
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