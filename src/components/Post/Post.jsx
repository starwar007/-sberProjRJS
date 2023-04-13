import { useContext } from "react";
import { ReactComponent as Like } from "./like.svg"
import styles from './post.module.css';
import { Link } from "react-router-dom";
import { formatDate } from "./formatDate";
import { isLiked } from "../../utils/post";
import { UserContext } from "../../context/ContextUser";
import { CardContext } from "../../context/cardContext";

export const Post = ({ image, text, title, created_at, author, tags, likes, _id }) => {

    const { currentUser } = useContext(UserContext);
    const {handleLike: onPostLike} = useContext(CardContext);
    const liked = isLiked(likes, currentUser?._id);

    function handleLikeClick(){
		onPostLike({_id, likes})
	}

    return (
        <div className={styles.post_card}>
           <div className={styles.post_header}>
              <div className={styles.post_header_autor}>
                <img src = {author.avatar} alt="аватар пользователя"/> 
                {author.name}
                <br/>
                {author.about}
              </div>
           </div> 
           <div className={styles.post_body}>
              <Link to={`/post/${_id}`}  className={styles.post__link}>
                <div className={styles.post_body_content}>
                    <div className="">
                    <img src={image} alt="картинка"/> 
                    </div>
                    <div className={styles.post_main_descripshion}>
                        <p><strong>{title}</strong></p>
                        <p>{text}</p>
                        <div className={styles.post_tags}>
                            
                            {tags.map((tag,index) => {
                                    
                                return  <span key={index} className={styles.background_text}>{tag}</span>
                            })}   
                        </div>
                    </div>
                    
                </div>
              </Link>
           </div>
           <div className={styles.post_footer}>
              <div className={styles.post_footer_content}>  
                    <div className={styles.like_contener}>
                        <button  className={liked ? (styles.post_favorite_active) : (styles.post_favorite)} onClick={handleLikeClick}>
                            <Like />
                        </button>
                        <span>&nbsp;</span>
                        <span>{(likes.length !== 0) && likes.length}</span>
                    </div>
                { formatDate(created_at)}
                </div>
           </div>     
        </div>
    )
}