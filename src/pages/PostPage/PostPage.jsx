import { Button as ButtonMUI} from '@mui/material'
import styles from './post_page.module.css'
import { ReactComponent as Like } from "../../components/Post/like.svg"
import { useContext, useEffect, useState } from 'react'
import api from '../../utils/api'
import { formatDate } from '../../components/Post/formatDate'
import { useParams, useNavigate } from 'react-router-dom'
import { Coment } from './Coments/Coment'
import { AddComent } from './Coments/AddComent/AddComent';
import EditPost from '../../components/EditPost/EditPost'
import Button from "../../components/Button/Button";
import ModalPost from "../../components/ModalPost/ModalPost"
import { isLiked } from "../../utils/post";
import { UserContext } from "../../context/ContextUser";
import { CardContext } from "../../context/cardContext";

export const PostPage = () => {

    const [liked, setLiked] = useState(false)
    const [modalActive, setModalActive] = useState(false);
    const id = useParams();
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    const {post, setPost, handleLike: onPostLike} = useContext(CardContext);

    function handleLikeClick(){
        setLiked(!liked);
        const likes = post.likes;
        const _id = post._id;
	 	onPostLike({_id, likes});
	}

    useEffect(() => {
        const tokenLS = localStorage.getItem('token')
        api.setToken(tokenLS);
        api.getPost(id.PostId)
            .then(postData => {
                setPost(postData);
                setLiked(isLiked(postData.likes, currentUser?._id))
            })
    }, [currentUser?._id, id.PostId])


    function DeletePost() {
        api.deletePost(id.PostId);
        setPost(null);
        navigate('*');
    }

    if (!post) return
    return (
        <>
            <div className={styles.mainContener}>
                <div className={styles.postContener}>
                    <ButtonMUI onClick={() => {
                        setPost(null)
                        navigate(-1)}}>
                    Назад</ButtonMUI>
                    <div className={styles.postCard}>
                        <div className={styles.postContent}>
                            <div>
                                <img src={post.image} alt="изображение" />
                            </div>
                            <div className={styles.postDescripshion}>
                                <div className={styles.postAutor}>
                                    <img src={post.author.avatar} alt="аватарка" />
                                    <span><strong>{post.author.name}</strong>
                                        <br />
                                        {formatDate(post.created_at)}
                                    </span>
                                </div>
                                <div className={styles.likeTags}>
                                    <div className={styles.like_contener}>
                                         <button className={liked ? (styles.post_favorite_active) : (styles.post_favorite)} onClick={handleLikeClick}>
                                            <Like />
                                        </button> 
                                        <span>&nbsp;</span>
                                   
                                    </div>
                                    <div className={styles.post_tags}>

                                        {  (post.tags[0] !=='') && post.tags.map((tag, index) => {
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
                                    {(currentUser._id === post.author._id) ? 
                                        <>
                                            <Button title="Удалить пост" fn ={()=>setModalActive(true)} className={styles.buttonLong} />
                                            <EditPost post={post}/>
                                            <hr />
                                        </> : <></> } 
                                    <ModalPost active={modalActive} setActive={setModalActive}>Подтвердите удаление поста
                                    <div style={{display:'flex', justifyContent:'center'}}>
                                        <button style={{color:'red'}} onClick={DeletePost}>Да, удалить!</button>
                                    </div>
                                    </ModalPost>
                                    <AddComent token={localStorage.getItem('token')} PostId={id.PostId} />
                                    {post.comments.length ?
                                        post.comments.map((item) => {
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