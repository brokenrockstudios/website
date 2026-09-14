import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import styles from './styles.module.css';

type Tool = {
  title: string;
  description: string;
  to?: string;
  comingSoon?: boolean;
};

const TOOLS: Tool[] = [
  {
    title: 'Palette Workbench',
    description:
      'Paste prose, Markdown, CSS, or hex codes and inspect/edit the colors found inside, right in your browser.',
    to: '/tools/palette',
  },
  {
    title: 'UV Texture Generator',
    description: 'Generate UV checker textures for your 3D models.',
    comingSoon: true,
  },
];

function ToolCard({ title, description, to, comingSoon }: Tool) {
  const content = (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      {comingSoon && <span className={styles.badge}>Coming soon</span>}
    </>
  );

  if (comingSoon || !to) {
    return <div className={clsx(styles.card, styles.cardDisabled)}>{content}</div>;
  }

  return (
    <a className={styles.card} href={to}>
      {content}
    </a>
  );
}

export default function Tools() {
  return (
    <Layout title="Tools" description="Handy standalone tools from Broken Rock Studios">
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Tools</h1>
          <p>Small, standalone utilities we've built along the way.</p>
        </header>
        <div className={styles.grid}>
          {TOOLS.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
