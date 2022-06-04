import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Card.module.css";

const timeout = {
	enter: 300,
	exit: 300
}

function Card(props) {
	const [isHovering, setIsHovering] = useState(false);
	const classes = `${styles.card} ${props.className || ""}`;

	return (
		<CSSTransition
			in={isHovering && !props.used}
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
			<div
				className={classes}
				onClick={props.onClick}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
			>
				{props.children}
			</div>
		</CSSTransition>
	);
}

export default Card
