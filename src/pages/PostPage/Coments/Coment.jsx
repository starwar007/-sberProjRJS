import styles from './coment.module.css'
import { formatDate } from '../../../components/Post/formatDate'
import { UserContext } from "../../../context/ContextUser";
import { useContext } from 'react';
import api from '../../../utils/api'
import cn from 'classnames';
import { CardContext } from '../../../context/cardContext';


export const Coment = ({author, created_at, post, text, updated_at, _id}) => {

    const { currentUser } = useContext(UserContext);
    const { setPost } = useContext(CardContext);
    function delComent(PostId,_id) {
        api.deleteComment(PostId,_id).then(data => api.getPost(post)
        .then(responce => {
            setPost(responce)
        }))
    }

      return (
        <>
              <div className={styles.comentPost}>
                  <div className={styles.comenAutor}>
                      <img src={author.avatar} alt="аватарка" />
                      <span><strong>{author.name}</strong>
                          <br />
                          {formatDate(created_at)}
                      </span>
                  </div>
                  <br />
              </div>
              <div className={styles.ComentContent}>
                  {text}
                  {currentUser._id === author._id && <button onClick={() => {delComent(post,_id)}} className={cn(styles.close,styles.styled)}>     X</button>}
                  
                  <hr/>
              </div>
        </>
      )
}