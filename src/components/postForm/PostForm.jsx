import styles from './postForm.module.css';
import api from '../../utils/api';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { CardContext } from "../../context/cardContext";

function PostForm({setActive}) {
    const { setCards } = useContext(CardContext);
    const { register, handleSubmit, formState: { errors},reset} = useForm({
            mode: "onChange",
        });
    const [url,setUrl] = useState('')    
        // useEffect(()=>{console.log(url)
        // },[url])
    const onSubmit = useCallback((data) => {
        const {title, text, image, tags} = data;
        const dataPost = {
            title: title,
            text: text,
            image: image,
            tags:  tags.split(',') 
          } 
        console.log(dataPost)
        api.createNewPost(dataPost)
            .then(api.getPosts()
                .then(res => {
                    // console.log(res)
                    setCards(res)
                }))
        setActive(false)
        reset()
        setUrl('')
    }, [setActive,setCards])
    return (
        <form>
            <h3>Создать пост</h3>
            <input
                // name ='image' 
                type="text"
                placeholder="url картинки поста"
                {...register('image', {
                    required: "обязательное поле"                
                })}
                onChange={(e) => { setUrl(e.target.value)}}
            />
            <div className={styles.image}>
                 <img src={url ? url : 'https://b-n-c.ru/local/templates/.default/img/no-img.jpg'} width="100%" alt=''/>
            </div>

            <input
                name='title'
                type="text"
                placeholder="Заголовок поста"
                {...register("title", {
                    required: "Обязательное поле",
                  })}
            />

            <input
                name='text'
                type="text"
                placeholder="Текст поста"
                {...register("text", {
                    required: "Обязательное поле",
                  })}
            />
            <input
                name = 'tags'
                type="text"
                placeholder="Введите теги через запятую"
                {...register("tags")}
            />
            <button type='button' onClick={handleSubmit(onSubmit)}>Создать</button>
        </form>
    );
};

export default PostForm;