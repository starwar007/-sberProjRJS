import styles from './postform.module.css';
import api from '../../utils/api';
import { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { CardContext } from "../../context/cardContext";


function PostForm({title, buttonTitle }) {

    const [postData, setPostData] = useState(null)
    const { register, handleSubmit, formState: { errors}, reset} = useForm({
            mode: "onChange",
        });
    const [url,setUrl] = useState('')
    const {post, handleSendPost:onSubmitSendPost} = useContext(CardContext);
    
    
    function handlePostSend(data) {
        onSubmitSendPost(data, post, reset, setUrl);
    }

    useEffect(() => {
        if(post) {
            api.getPost(post._id) 
            .then(res => {
                setPostData(res)
                if (post.image) {
                    setUrl(post.image)
                }
            })
        }        
    }, [])

    return (
        <form className='form'>
            <h3 className='form-title'>{title}</h3>
            <input
                className='formInput'
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
                className='formInput'
                defaultValue={(postData) ? postData.title : ''}
                name='title'
                type="text"
                placeholder="Заголовок поста"
                {...register("title", {
                    required: "Обязательное поле",
                  })}
            />
            <textarea
                className='formInput'
                defaultValue={(postData) ? postData.text : ''}
                name='text'
                type="text"
                placeholder="Текст поста"
                {...register("text", {
                    required: "Обязательное поле",
                  })}
            />
            <input
                className='formInput'
                defaultValue={(postData) ? postData.tags.join(', ') : ''}
                name = 'tags'
                type="text"
                placeholder="Введите теги через запятую"
                {...register("tags")}
            />
            <button type='button' 
                    onClick={handleSubmit(handlePostSend)}
            >{buttonTitle}</button>
        </form>
    );
};


export default PostForm;