import {Post} from '../Post/Post';
import './style.css';
import data from '../../assets/data.json'

console.log('PostList');

const PostList = () => {
	
	return (
		
		<div className='cards'>
				{data.map((item,index) => (
					 <Post   key = {index} {...item} />
					
					 ))}
						
		</div>
	);
};

export default PostList;