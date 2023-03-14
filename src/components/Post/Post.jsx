import { useState } from "react";
import { ReactComponent as Like } from "./like.svg"
import styles from './post.module.css';

export const Post = ({image,text,title,created_at,author,tags,likes}) => {

    const [conterlike,setcounter] = useState(0);

    let count_likes = likes.length;
    function formatDate(str) { 
        const month = str.slice(5, 7);
        let datemonth = '';
        switch (month) {
            case '01' : datemonth ='января';
            break;
            case '02' : datemonth ='февраля';
            break;
            case '03' : datemonth ='марта';
            break;
            case '04' : datemonth ='апреля';
            break;
            case '05' : datemonth ='мая';
            break;
            case '06' : datemonth ='июня';
            break;
            case '07' : datemonth ='июля';
            break;
            case '08' : datemonth ='августа';
            break;
            case '09' : datemonth ='сентября';
            break;
            case '10' : datemonth ='октября';
            break;
            case '11' : datemonth ='ноября';
            break;
            case '12' : datemonth ='декабря';
            break;
        } 
        let string = (str.slice(8, 10) + ' ' + datemonth + ' ' + str.slice(0, 4));
        return string.startsWith('0') ? string.slice(1) : string;
    }
    
    function tagslist(arraytags) {
        let str ='';
        let str1 = `<span className='background-text'> ${str}<span/>`;
        let str2 = `<span className='background-null'>__</span>`;
        let rez = '';
        
        for(let val = 0;val<arraytags.length;val++){
            
            str = arraytags[val];
            rez = str1 + str2;
        }
        console.log(typeof rez,rez);
        return rez
    }
    
    return (
        <div className={styles.post_card}>
           <div className={styles.post_header}>
              <div className={styles.post_header_autor}>
                {/* header поста */}
                <img src = {author.avatar} alt="аватар пользователя"/> 
                {author.name}
                <br/>
                {author.about}
              </div>
           </div> 
           <div className={styles.post_body}>
                <div className={styles.post_body_content}>
                    {/* тело */}
                    <div className="">
                    <img src={image} alt="картинка"/> 
                    </div>
                    <div className={styles.post_main_descripshion}>
                        <p><strong>{title}</strong></p>
                        <p>{text}</p>
                        <div className={styles.post_tags}>
                            
                            {tags.map((tag) => {
                                    
                                return  <span className={styles.background_text}>{tag}</span>
                            })}   
                        </div>
                    </div>
                    
                </div>
           </div>
           <div className={styles.post_footer}>
              <div className={styles.post_footer_content}>  
                <div className={styles.like_contener}>  
                <button className={(conterlike % 2) ? styles.post_favorite_active : styles.post_favorite} onClick={() => (conterlike % 2)? setcounter(conterlike - 1) : setcounter(conterlike + 1)}>
                    {/* {console.log(conterlike)} */}
                    <Like/>
                </button>
                <span>&nbsp;</span>
                <span>{!count_likes? conterlike:count_likes + conterlike}</span>
                </div>
                { formatDate(created_at)}
                </div>
           </div>     
        </div>
    )
}