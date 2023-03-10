import styles from './postForm.module.css'


function PostForm() {

 

    return (
        <form>
            <h3>Создать пост</h3>
            <input
                type="text"
                placeholder="url картинки поста"
            />

            <input
             
                type="text"
                placeholder="Заголовок поста"
            />

            <input
                type="text"
                placeholder="Текст поста"
            />
            <input
                type="text"
                placeholder="Введите теги через запятую"
            />
          
          
            <button>Создать</button>
        </form>
    );
};

export default PostForm;