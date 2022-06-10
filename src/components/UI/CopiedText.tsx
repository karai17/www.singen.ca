import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./CopiedText.module.css";

const timeout = {
	enter: 300,
	exit: 300
}

const CopiedText: React.FC<{ display: boolean }> = ({ display }) => {
	const [isDisplayCopy, setIsDisplayCopy] = useState<boolean>(false);

	const copyEnteredHandler = () => {
		const interval = setInterval(() => {
			setIsDisplayCopy(false)
			clearInterval(interval);
		}, 500);
	};

	useEffect(() => {
		setIsDisplayCopy(display)
	}, [display]);

	return (
		<CSSTransition
			mountOnEnter
			unmountOnExit
			in={isDisplayCopy}
			timeout={timeout}
			classNames={{
				enter: styles["copy-enter"],
				enterActive: styles["copy-enter-active"],
				enterDone: styles["copy-enter-done"],
				exit: styles["copy-exit"],
				exitActive: styles["copy-exit-active"],
				exitDone: styles["copy-exit-done"]
			}}
			onEntered={copyEnteredHandler}
		>
			<span className={styles.copy}>Copied!</span>
		</CSSTransition>
	);
};

export default CopiedText;
