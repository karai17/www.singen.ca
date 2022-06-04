import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./Sin.module.css";
import Card from "./UI/Card";

const timeout = {
	enter: 300,
	exit: 300
}

const Sin = (props) => {
	const [used, setUsed] = useState(false);
	const [show, setShow] = useState(false);
	const [classes, setClasses] = useState(styles.sin);

	function clickHandler() {
		if (used) { return; }

		navigator.clipboard.writeText(props.children);
		setClasses(`${styles.sin} ${styles.used}`);
		setUsed(true);
		setShow(true);
	}

	return (
		<Card onClick={clickHandler} used={used}>
			<CSSTransition
				mountOnEnter
				unmountOnExit
				in={show}
				timeout={timeout}
				classNames={{
					enter: styles["copy-enter"],
					enterActive: styles["copy-enter-active"],
					enterDone: styles["copy-enter-done"],
					exit: styles["copy-exit"],
					exitActive: styles["copy-exit-active"],
					exitDone: styles["copy-exit-done"]
				}}
				onEntered={() => {
					const interval = setInterval(() => {
						setShow(false)
						clearInterval(interval);
					}, 500);
				}}
			>
				<span className={styles.copy}>Copied!</span>
			</CSSTransition>
			<span className={classes}>{props.children}</span>
		</Card>
	);
};

export default Sin
