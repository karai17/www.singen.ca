import SinItem from "../Sin/SinItem";
import styles from "./SinList.module.css";

const SinList: React.FC<{ sins: string[] }> = ({ sins }) => {
	const sinItems = sins.map((sin) => <SinItem key={sin} value={sin} />);
	return <ul className={styles.sinList}>{sinItems}</ul>
};

export default SinList;
