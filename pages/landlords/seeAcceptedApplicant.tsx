import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import NavbarScroller from '../nav_logo';

const seeAcceptedApplicant: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZK Rental</title>
        <meta
          name="description"
          content="ZK Rent plateform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarScroller></NavbarScroller>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>
          List of your accepted tenants
        </h1>

        <div className={styles.card}>
            <h2>Lovely appartment Berlin</h2>
            <div className="lowerhalf">
              <div className={styles.description_applicant}>Hey I&apos;m Sandy a Firefighter.</div>
              <div className="buttons-section-applicant">
                <div className={styles.accepted_offer}>Accepted</div>
              </div>
            </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by the ZK Rental team @ETHWarsaw !
        </a>
      </footer>
    </div>
  );
};

export default seeAcceptedApplicant;
