import { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import styles from './searchinfo.module.css';

const SeachInfo = ({ searchText }) => {
	const {cards} = useContext(CardContext);
	const searchCount = cards.length;

	return (
		searchText && <section className={styles.searchTitle}>
			По запросу <span>{searchText}</span> найдено {searchCount} поста
		</section>
	);
};

export default SeachInfo;
