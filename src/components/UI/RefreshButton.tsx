import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./RefreshButton.module.css";

const timeout = {
	enter: 300,
	exit: 300
}

const RefreshButton: React.FC<{ onClick: () => void}> = ({ onClick }) => {
	const [isHover, setIsHover] = useState<boolean>(false);

	return (
		<CSSTransition
			in={isHover}
			timeout={timeout}
			classNames={{
				enter: styles["hover-enter"],
				enterActive: styles["hover-enter-active"],
				enterDone: styles["hover-enter-done"],
				exit: styles["hover-exit"],
				exitActive: styles["hover-exit-active"],
				exitDone: styles["hover-exit-done"]
			}}
		>
			<FontAwesomeIcon
				icon={faArrowRotateRight}
				className={styles.fa}
				onClick={onClick}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			/>
		</CSSTransition>
	);
};

export default RefreshButton;
