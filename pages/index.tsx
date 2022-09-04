import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import NavbarScroller from './nav_logo';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZK Rental</title>
        <meta
          name="description"
          content="ZK-Rent plateform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarScroller></NavbarScroller>
      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>
          Welcome to ZK-Rent : <a href="">Rental proposal</a> + <a href="">ZK</a> ={' '}
          <a href="">more privacy!</a>
        </h1>

        <p className={styles.description}>
          Who are {' '}
          <code className={styles.code}>you ?</code>
        </p>

        <div className={styles.description}>
            <button className={styles.metabtn}><Link href="tenants/tenant">Tenants</Link></button>
            <button className={styles.metabtn}><Link href="landlords/landlord">Landlords</Link></button>
        </div>
        <img src="/logo.png" className={styles.card_img_ld}></img>

        
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by the ZK Rental team @ETHWarsaw !
        </a>
      </footer>
    </div>
  );
};

export default Home;
