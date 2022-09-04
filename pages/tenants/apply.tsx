import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import NavbarScroller from '../nav_logo';

const applyToOffer: NextPage = () => {
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
          Apply for your new Home
        </h1>

        <form>
            <label className={styles.description_apply}>
            This appartment is located in the 17ème arrondissement.
            <br></br> 
            <textarea id="proof" name="story" className={styles.proof} defaultValue={"Inser your proof ..."} rows={5} cols={33}>
            </textarea>
            <br></br>
            </label>
            <input type="submit" className={styles.accept_offer} value="Apply for Rent" />
            <button className={styles.book_visit}>Book a Visit</button>
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

export default applyToOffer;
