import styles from './coment.module.css'
import { formatDate } from '../../../components/Post/formatDate'


export const Coment = ({author, created_at, post, text, updated_at, _id}) => {


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
                  <hr/>
              </div>
        </>
      )
}