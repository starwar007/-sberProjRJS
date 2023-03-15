import './postForm.module.css';



function PostForm() {

 
    return (

        <form>
          <div className="modal-body">
            <h3>Создать пост</h3>
            <input 
                type="text"
                placeholder="url картинки поста"
            />
            <div>
                 <img src="https://b-n-c.ru/local/templates/.default/img/no-img.jpg" width="90%"/>
            </div>

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

         </div>
        </form>
    );
};

export default PostForm;