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
