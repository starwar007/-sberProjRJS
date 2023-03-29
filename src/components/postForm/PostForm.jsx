import './postForm.module.css';
import api from '../../utils/api';
import { useCallback } from 'react';
import { useForm } from "react-hook-form";

function PostForm() {
    const { register, handleSubmit, formState: { errors}} = useForm({
            mode: "onChange",
        });

    const onSubmit = useCallback((data) => {
        const {title, text, image, tags} = data;
        const registrationData = {
            title: data.title,
            text: data.text,
            image: data.image,
            tags: data.tags.split(',')
          } 

        console.log(registrationData)
           api.createNewPost(registrationData)
             .then(obj => console.log(obj))
    }, [])
    return (
        <form>
            <h3>Создать пост</h3>
            <input
                name ='image' 
                type="text"
                placeholder="url картинки поста"
                {...register('image', {
                    required: "обязательное поле"
                })}
            />
            <div>
                 <img src="https:   b-n-c.ru/local/templates/.default/img/no-img.jpg" width="90%" alt=''/>
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