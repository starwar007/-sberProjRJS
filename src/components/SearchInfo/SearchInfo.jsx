import { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import styles from './searchinfo.module.css';

const SeachInfo = ({ searchText }) => {
	const {cards} = useContext(CardContext);
	const searchCount = cards.length;

	return (
		searchText && <section className={styles.searchTitle}>
			По запросу <span>{searchText}</span> найдено {searchCount} 
			{searchCount  === 1 && ' пост'}
			{searchCount > 1 && searchCount <5 && ' поста'}
			{(searchCount > 4 || !searchCount) && ' постов' }
		</section>
	);
};

export default SeachInfo;
