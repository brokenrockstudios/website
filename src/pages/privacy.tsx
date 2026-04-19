import React from 'react';
import Layout from '@theme/Layout';
import styles from './privacy.module.css';

export default function Privacy() {
  return (
    <Layout title="Privacy Policy" description="Privacy Policy for Broken Rock Studios">
      <main className={styles.container}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: April 18, 2026</p>

        <section>
          <h2>Overview</h2>
          <p>
            Broken Rock Studios, LLC ("we", "us", or "our") operates{' '}
            <a href="https://brokenrockstudios.com">brokenrockstudios.com</a>. This page explains
            what information we collect, why we collect it, and how we use it.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>
            We use <strong>Google Analytics</strong> (via Google Tag Manager with IP anonymization
            enabled) to understand how visitors use our site. This may collect:
          </p>
          <ul>
            <li>Pages visited and time spent on each page</li>
            <li>General geographic location (country/region level, not precise)</li>
            <li>Browser type, device type, and operating system</li>
            <li>Referral source (e.g., search engine or link)</li>
          </ul>
          <p>
            We do <strong>not</strong> collect your name, email address, or any personally
            identifiable information through this site.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            We use cookies for the following purposes:
          </p>
          <ul>
            <li>
              <strong>Analytics cookies</strong> — set by Google Analytics to track aggregate
              usage statistics. Your IP address is anonymized before processing.
            </li>
            <li>
              <strong>Consent cookie</strong> — stores your cookie consent preference so we
              don't ask again on repeat visits.
            </li>
          </ul>
          <p>
            You can decline analytics cookies using the banner shown on your first visit. You can
            also manage or delete cookies through your browser settings at any time.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            Our site links to third-party services (Steam, Discord, Reddit, Unreal Marketplace).
            Those services have their own privacy policies and we are not responsible for their
            data practices.
          </p>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            Our site is not directed to children under 13. We do not knowingly collect personal
            information from children.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The "last updated" date at the top of
            this page will reflect any changes.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions? Reach us on{' '}
            <a href="https://discord.gg/sqt6n7Z5xu">Discord</a> or{' '}
            <a href="https://www.reddit.com/r/BrokenRockStudios/">Reddit</a>.
          </p>
        </section>
      </main>
    </Layout>
  );
}
