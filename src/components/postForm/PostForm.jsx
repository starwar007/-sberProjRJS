import styles from './postForm.module.css';
import api from '../../utils/api';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { CardContext } from "../../context/cardContext";
import { useNavigate } from 'react-router-dom';

function PostForm({setActive, post, title, buttonTitle}) {

    const navigate = useNavigate();
    const [postData, setPostData] = useState(null)
    const { setCards } = useContext(CardContext);
    const { register, handleSubmit, formState: { errors}, reset, setValue} = useForm({
            mode: "onChange",
        });
    const [url,setUrl] = useState('')

    useEffect(() => {
        if(post) {
            api.getPost(post.post._id) 
            .then(res => {
                setPostData(res)
                if (postData.image) {
                    setUrl(postData.image)
                }
            })
        }        
    }, [post])

    const onSubmit = useCallback((data) => {
        const {title, text, image, tags} = data;
        const dataPost = {
            title: title,
            text: text,
            image: image,
            tags:  tags.split(',') 
        } 
     
          if (!post) {
              api.createNewPost(dataPost)
                  .then(api.getPosts()
                      .then(res => {
                           console.log(res)
                          setCards(res)
                    }))
                    .catch(() =>  navigate('*'))
              }
              else {
               api.editPost(dataPost, postData._id)
               .then(api.getPosts()
                      .then(res => {
                           console.log(res)
                          setCards(res)
                          
                  }))
                .catch(() =>  navigate('*'))
          }
        setActive(false)
        reset()
        setUrl('')
    }, [setActive, setCards])

    return (
        <form>
            <h3>{title}</h3>
            <input
                defaultValue={(postData) ? postData.image : ''}
                id = 'image'
                name ='image' 
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
                defaultValue={(postData) ? postData.title : ''}
                name='title'
                type="text"
                placeholder="Заголовок поста"
                {...register("title", {
                    required: "Обязательное поле",
                  })}
            />
            <textarea
                defaultValue={(postData) ? postData.text : ''}
                name='text'
                type="text"
                rows={6}
                cols={50}
                placeholder="Текст поста"
                {...register("text", {
                    required: "Обязательное поле",
                  })}
            />
            <input
                defaultValue={(postData) ? postData.tags.join(',') : ''}
                name = 'tags'
                type="text"
                placeholder="Введите теги через запятую"
                {...register("tags")}
            />
            <button type='button' 
                    onClick={handleSubmit(onSubmit)}
            >{buttonTitle}</button>
        </form>
    );
};

export default PostForm;