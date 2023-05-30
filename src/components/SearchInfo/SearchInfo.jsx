import { useEffect, useState } from "react";
import styles from './searchinfo.module.css';
import api from '../../utils/api';

const SeachInfo = ({ searchText }) => {
	
	const [searchCount,setSearchCount] = useState(0);

	useEffect(() => {
		api.setToken(localStorage.getItem('token'))
		api.search(searchText)
			.then((searchResult) => {
				setSearchCount(searchResult.length);
			})
	}, [searchText])
	const getIssues = (numb) =>{
		const tmp = numb % 10;
		if (tmp === 1 && numb !== 11) return ' пост';
		if ((tmp>1 && tmp<5)  && numb !== 12 && numb !== 13 &&numb !== 14) return ' поста';
		if (tmp >4 || !numb || tmp === 0 || numb === 11 || numb === 12 || numb === 13 || numb === 14) return ' постов';
	}

	return (
		searchText && <section className={styles.searchTitle}>
			По запросу <span>{searchText}</span> найдено {searchCount} 
			{getIssues(searchCount)}
		</section>
	);
};

export default SeachInfo;
