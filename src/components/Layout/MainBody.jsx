import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

import Sin from "../Sin";
import styles from "./MainBody.module.css";

function randomInt(max) {
	return Math.floor(Math.random() * max);
}

/*
	FNG Canada Social Insurance Number Generator and Validator v1.1
	Copyright © 2009 Fake Name Generator <http://www.fakenamegenerator.com/>

	FNG Canada Social Insurance Number Generator and Validator v1.1 by the Fake
	Name Generator is licensed to you under a Creative Commons Attribution-Share
	Alike 3.0 United States License.

	For full license details, please visit:
	http://www.fakenamegenerator.com/license.php
*/
function generateSin() {
	const validPrefix = [ "1", "2", "3", "4", "5", "6", "7", "9" ];
	const sin = [validPrefix[randomInt(8)]];
	const length = 9;

	while (sin.length < length-1) {
		sin.push(randomInt(10).toString());
	}

	let sum = 0;
	let pos = 0;
	const reversedSin = sin.map(d=>d).reverse();

	while (pos < length-1) {
		let odd = Number.parseInt(reversedSin[pos]) * 2;

		if (odd > 9) {
			odd -= 9;
		}

		sum += odd;

		if (pos !== length-2) {
			sum += Number.parseInt(reversedSin[pos+1]);
		}

		pos += 2;
	}

	const checksum = ((Math.floor(sum / 10) + 1) * 10 - sum) % 10;
	sin.push(checksum.toString());

	return sin.join("");
}

function MainBody() {
	const [sinList, setSinList] = useState([]);
	const sinCards = sinList.map((sin) => <li key={sin}><Sin>{sin}</Sin></li>);

	function generateSins() {
		const sins = [];

		for (let i=0; i<40; i++) {
			const sin = generateSin();
			sins.push(sin);
		}

		setSinList(sins);
	}

	useEffect(generateSins, []);

	return (
		<main className={styles.container}>
			<article className={styles.content}>
				<section className={styles.disclaimer}>
					<h2 className={styles.h2}>Disclaimer</h2>
					<p>
						This tool is designed to assist with testing government and financial software that requires valid Canadian
						Social Insurance Numbers. Using fake Canadian Social Insurance Numbers for any other purpose may constitute
						a federal crime.
					</p>
				</section>
				<section className={styles.sins}>
					<FontAwesomeIcon icon={faArrowRotateRight} className={styles.fa} onClick={generateSins} />
					<ul className={styles.sinList}>{sinCards}</ul>
				</section>
			</article>
		</main>
	);
}

export default MainBody;
