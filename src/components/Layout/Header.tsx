import styles from "./Header.module.css";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<h1>Canadian Social Insurance Numbers</h1>
		</header>
	);
};

export default Header;
