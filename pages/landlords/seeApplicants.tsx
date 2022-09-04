import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import NavbarScroller from '../nav_logo';

const seeApplicants: NextPage = () => {
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
          Here are the applications for your rentals
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Cosy appartment Paris</h2>
            <div className="lowerhalf">
              <div className={styles.description_applicant}>Hey I&apos;m Matt a Web3 Dev.</div>
              <div className="buttons-section-applicant">
                <button className={styles.accept_offer}>accept</button>
                <button className={styles.decline_offer}>decline</button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Lovely appartment Berlin</h2>
            <div className="lowerhalf">
              <div className={styles.description_applicant}>Hey I&apos;m Sandy a Firefighter.</div>
              <div className="buttons-section-applicant">
                <button className={styles.accept_offer}>accept</button>
                <button className={styles.decline_offer}>decline</button>
              </div>
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

export default seeApplicants;
