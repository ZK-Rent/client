import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import NavbarScroller from '../nav_logo';

const createEscrow: NextPage = () => {
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
          Create an Escrow to securise your rental deposit
        </h1>

        <form>
          <label className={styles.my_input}>
            Name :
            <input type="text" name="name" />
          </label>
          <label className={styles.my_input}>
            Description :
            <input type="text" name="description" />
          </label>
          <input type="submit" value="Create Escrow" />
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

export default createEscrow;
