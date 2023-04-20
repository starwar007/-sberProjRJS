import styles from './modalPost.module.css'

function ModalPost({ active, setActive, children }) {
    return (
        <div className={`${styles.modalPost} ${active && styles.active}`}
            onClick={() => setActive(false)}>

            <div className={`${styles.modalPost_content} ${active && styles.modalPost_content_active}`}
                onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalPost;