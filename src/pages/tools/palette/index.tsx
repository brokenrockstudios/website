import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

export default function PalettePage() {
  return (
    <Layout
      title="Palette Workbench"
      description="Paste prose, Markdown, CSS, or hex codes and inspect/edit the colors found inside."
    >
      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1>Palette Workbench</h1>
            <p>Your text, with its colors brought to life.</p>
          </div>
          <Link
            className={styles.openNewTab}
            to="/tools/palette-app/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in a new tab ↗
          </Link>
        </header>
        <div className={styles.frameWrapper}>
          {/* The tool is a self-contained static page (own script/state); embed it via iframe so it can keep running its own JS untouched. */}
          <iframe
            className={styles.frame}
            src="/tools/palette-app/index.html"
            title="Palette Workbench"
          />
        </div>
      </main>
    </Layout>
  );
}
