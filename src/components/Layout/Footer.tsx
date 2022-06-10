import styles from "./Footer.module.css";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<ul>
				<li>Created by <a href="https://landonmanning.com">Landon Manning</a></li>
				<li>View on <a href="https://github.com/karai17/www.singen.ca">GitHub</a></li>
			</ul>
		</footer>
	);
};

export default Footer;
