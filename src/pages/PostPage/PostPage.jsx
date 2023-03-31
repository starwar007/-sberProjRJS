import { Button } from '@mui/material'
import styles from './post_page.module.css'
import { ReactComponent as Like } from "../../components/Post/like.svg"
import { useEffect, useState } from 'react'
import api from '../../utils/api'
import { formatDate } from '../../components/Post/formatDate'
import { useParams,useNavigate } from 'react-router-dom'
import { Coment } from './Coments/Coment'
import {AddComent} from './Coments/AddComent/AddComent'


export const PostPage = () => {

    const [post,setPost] = useState(null)
    const [coments,setComents] = useState([])
    const id = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        const tokenLS = localStorage.getItem('token')
        api.setToken(tokenLS)
        Promise.all([api.getPost(id.PostId), api.getPostComments(id.PostId)])
            .then(([postData, coments]) => {
                setPost(postData);
                setComents(coments)
            })
    }, [])
   
    
    if (!post) return

     return (
        <>
          <div className={styles.mainContener}>             
            <div className = {styles.postContener}>
            <Button onClick={() => navigate(-1)}>Назад</Button>
                <div className = {styles.postCard}>
                    <div className = {styles.postContent}>
                        <div>
                            <img src ={post.image} alt = "изображение"/>
                        </div>
                        <div className = {styles.postDescripshion}>
                            {/* Post descripshion */}
                            <div className ={styles.postAutor}>
                                <img src = {post.author.avatar} alt = "аватарка"/>
                                <span><strong>{post.author.name}</strong>
                                <br/>
                                  {formatDate( post.created_at)}
                                </span>
                            </div>
                            <div className={styles.likeTags}>
                                <button className={styles.button} >
                                    <Like/>
                                </button>
                                {/* count_like  */}
                                <div className={styles.post_tags}>
                            
                            {post.tags.map((tag,index) => {
                                    
                                return  <span key= {index} className={styles.background_text}>{tag}</span>
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
                              <hr/>
                              <AddComent token = {localStorage.getItem('token')}/>
                                     {coments.length ?
                                         coments.map((item) => {
                                             return <Coment key={item._id} {...item} />
                                         })
                                         : 'No coments'}
                           </div>    
                        </div> 
                          
                    </div>
                    
                </div>
            </div>
        </div>  
        </>
    )
}