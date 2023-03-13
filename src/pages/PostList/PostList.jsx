
import data from '../../assets/data.json';
import {Post} from '../../components/Post/Post';
import styles from './style.module.css';
// console.log('PostList');

const PostList = () => {
	
	return (
		
		<div className={styles.cards}>
				{data.map((item,index) => (
					 <Post   key = {index} {...item} />
					
					 ))}
						
		</div>
	);
};

export default PostList;