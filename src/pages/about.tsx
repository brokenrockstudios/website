import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';

import styles from './about.module.css';
import AboutPage from '../components/AboutPage';



function About() {
	const context = useDocusaurusContext();
	let { siteConfig } = context;
	const aboutConfig = siteConfig.customFields.about as {[key: string]: unknown};
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
			title={aboutConfig.title as string}
			description={aboutConfig.description as string}
		>
			<main className={styles.heroContainer}>
				<AboutPage {...siteConfig} descriptionLines={lines} />
			</main>
		</Layout>
	);
}

export default About;