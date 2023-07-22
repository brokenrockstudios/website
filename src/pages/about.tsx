import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';

import styles from './about.module.css';
import HomePage from '../components/About';

function Home() {
	const context = useDocusaurusContext();
	let { siteConfig } = context;

	const lines = [
		translate({
			id: 'homepage.description.descriptionLine_1',
			message: 'Developer, gamer, & couch potato.',
			description: 'The first line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_2',
			message: 'Former Xbox Software Engineer',
			description: 'The second line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_3',
			message: 'Loves pizza',
			description: 'The third line of description',
		}),
	];

	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.customFields.description as string}
		>
			<main className={styles.heroContainer}>
				<HomePage {...siteConfig} descriptionLines={lines} />
			</main>
		</Layout>
	);
}

export default Home;