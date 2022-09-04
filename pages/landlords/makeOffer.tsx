import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import NavbarScroller from '../nav_logo';

const makeOffer: NextPage = () => {
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
          Make an offer !
        </h1>
        <p>Submit an offer and allow your future tenants to submit their application in a secure manner.
        </p>
        <form>
          <label className={styles.my_input}>
            Title :
            <input type="text" name="title" />
          </label>
          <label className={styles.my_input}>
            Description :
            <input type="text" name="description" />
          </label>
          <label className={styles.my_input}>
            Income requirement :
            <input type="text" name="income" />
          </label>
          <label className={styles.my_input}>
            Deposit amount :
            <input type="text" name="deposit_amount" />
          </label>
          <input type="submit" value="Create offer" />
        </form>
       
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by the ZK Rental team @ETHWarsaw !
        </a>
      </footer>
    </div>
  );
};

export default makeOffer;
