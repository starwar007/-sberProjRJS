
import './style.css';
import data from '../../assets/data.json'
import {Post} from '../../components/Post/Post'
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