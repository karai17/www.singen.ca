import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import CopiedText from "../UI/CopiedText";
import styles from "./SinItem.module.css";

const timeout = {
	enter: 300,
	exit: 300
}

const SinItem: React.FC<{ value: string }> = ({ value }) => {
	const [classes, setClasses] = useState<string>(`${styles["sin-item"]}`);
	const [isConsumed, setIsConsumed] = useState<boolean>(false);
	const [isHover, setIsHover] = useState<boolean>(false);

	const itemClickHandler = () => {
		if (isConsumed) { return; }

		navigator.clipboard.writeText(value);
		setClasses(`${styles["sin-item"]} ${styles.consumed}`);
		setIsConsumed(true);
	};

	return (
		<CSSTransition
			in={isHover && !isConsumed}
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
			<li
				className={classes}
				onClick={itemClickHandler}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<CopiedText display={isConsumed} />
				{value}
			</li>
		</CSSTransition>
	);
};

export default SinItem;
