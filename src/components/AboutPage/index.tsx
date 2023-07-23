import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export default function AboutPage({ descriptionLines }) {
    return (
        <section className={styles.hero}>
            <div
                className={clsx('footer__link-item', styles.title,)}
            >
                <img src={require('@site/static/img/about/adam-gorman-headshot.png').default} />
                <span>Adam Gorman</span>
            </div>
            <span className={styles.subtitle}>Developer</span>
            <hr className={styles.divider} />
            <div className={styles.description}>
                {descriptionLines &&
                    descriptionLines.map((d, i) => <p key={i}>{d}</p>)}
            </div>

        </section>
    );
}