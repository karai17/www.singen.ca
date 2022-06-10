import { useEffect, useState } from "react";

import RefreshButton from "../UI/RefreshButton";
import SinList from "../Sin/SinList";

import styles from "./MainBody.module.css";

function randomInt(max: number): number {
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
function generateSin(): string {
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

const MainBody: React.FC = () => {
	const [sins, setSins] = useState<string[]>([]);

	function refreshSins() {
		const newSins: string[] = [];

		for (let i=0; i<40; i++) {
			newSins.push(generateSin());
		}

		setSins(newSins);
	}

	useEffect(refreshSins, []);

	return (
		<main className={styles["main-body"]}>
			<article>
				<section className={styles.disclaimer}>
					<h2>Disclaimer</h2>
					<p>
						This tool is designed to assist with testing government and financial software that requires valid Canadian
						Social Insurance Numbers. Using fake Canadian Social Insurance Numbers for any other purpose may constitute
						a federal crime.
					</p>
				</section>
				<section className={styles.sins}>
					<RefreshButton onClick={refreshSins} />
					<SinList sins={sins} />
				</section>
			</article>
		</main>
	);
};

export default MainBody;
