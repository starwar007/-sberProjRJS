import { ReactComponent as Like } from "./like.svg"
import './style.css';

const Post = ({image,text,title,created_at,author}) => {

    function formatDate(str) {
        return (str.slice(8, 10) + '.' + str.slice(5, 7) + '.' + str.slice(0, 4))
}   

    return (
        <div className="post-card">
           <div className="post-header">
              <div className="post-header-autor">
                {/* header поста */}
                <img src = {author.avatar} alt="аватар пользователя"/> 
                {author.name}
                <br/>
                {author.about}
              </div>
           </div> 
           <div className="post-body">
                <div className="post-body-content">
                    {/* тело */}
                    <div className="">
                    <img src={image} alt="картинка"/> 
                    </div>
                    <div className="post-main-descripshion">
                        <p><strong>{title}</strong></p>
                        <p>{text}</p>
                    </div>
                </div>
           </div>
           <div className="post-footer">
              <div className="post-footer-content">  
                <button className="post-favorite">
                    <Like/>
                </button>
                { formatDate(created_at)}
                </div>
           </div>     
        </div>
    )
}

export default Post