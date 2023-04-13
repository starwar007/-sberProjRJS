import { Button as ButtonMUI} from '@mui/material'
import styles from './post_page.module.css'
import { ReactComponent as Like } from "../../components/Post/like.svg"
import { useEffect, useState } from 'react'
import api from '../../utils/api'
import { formatDate } from '../../components/Post/formatDate'
import { useParams, useNavigate } from 'react-router-dom'
import { Coment } from './Coments/Coment'
import { AddComent } from './Coments/AddComent/AddComent'

import Button from "../../components/Button/Button";
import ModalPost from "../../components/ModalPost/ModalPost"


export const PostPage = () => {

    const [post, setPost] = useState(null);
    const [coments, setComents] = useState([]);

    const [userIam, setUserIam] = useState(null);
    const [modalActive, setModalActive] = useState(false);

    const id = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const tokenLS = localStorage.getItem('token')
        api.setToken(tokenLS)
        Promise.all([api.getPost(id.PostId), api.getPostComments(id.PostId), api.getUserInfo()])
            .then(([postData, coments, userInfo]) => {
                setPost(postData);
                setComents(coments);
                setUserIam(userInfo);
            })
    }, [id.PostId])


    function DeletePost() {
        api.deletePost(id.PostId);
        navigate('*');
    }

    if (!post) return

    return (
        <>
            <div className={styles.mainContener}>
                <div className={styles.postContener}>
                    <ButtonMUI onClick={() => navigate(-1)}>Назад</ButtonMUI>
                    <div className={styles.postCard}>
                        <div className={styles.postContent}>
                            <div>
                                <img src={post.image} alt="изображение" />
                            </div>
                            <div className={styles.postDescripshion}>
                                {/* Post descripshion */}
                                <div className={styles.postAutor}>
                                    <img src={post.author.avatar} alt="аватарка" />
                                    <span><strong>{post.author.name}</strong>
                                        <br />
                                        {formatDate(post.created_at)}
                                    </span>
                                </div>
                                <div className={styles.likeTags}>
                                    <button className={styles.button} >
                                        <Like />
                                    </button>
                                    {/* count_like  */}
                                    <div className={styles.post_tags}>

                                        {post.tags.map((tag, index) => {

                                            return <span key={index} className={styles.background_text}>{tag}</span>
                                        })}
                                    </div>
                                </div>
                                <div className={styles.title}>
                                    {post.title}
                                </div>
                                <div className={styles.textContent}>
                                    {post.text}
                                </div>
                                <div className={styles.coment}>
                                    <hr />

                                    {/* {(userIam === userPost) ? <><ButtonDelete title="Удалить пост" fn={DeletePost} route="*" className={styles.buttonLong} /> <hr /> </>:<></>} */}
                                    {(userIam._id === post.author._id) ? <><Button title="Удалить пост" fn ={()=>setModalActive(true)} className={styles.buttonLong} /> <hr /> </>:<></>}
                                    <ModalPost active={modalActive} setActive={setModalActive}>Подтвердите удаление поста
                                    <div style={{display:'flex', justifyContent:'center'}}>
                                        <button style={{color:'red'}} onClick={DeletePost}>Да, удалить!</button>
                                    </div>
                                    </ModalPost>



                                    <AddComent token={localStorage.getItem('token')} PostId={id.PostId} />
                                    {coments.length ?
                                        coments.map((item) => {
                                            return <Coment key={item._id} {...item} />
                                        })
                                        : ''}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}