import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import NavbarScroller from '../nav_logo';

const Tenant: NextPage = () => {
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
          Tenant dashboard
        </h1>

        <div className={styles.description}>
            <button className={styles.metabtn}><Link href="./createEscrow">Create an Escrow</Link></button>
            <button className={styles.metabtn}><Link href="./yourApplication">Your applications</Link></button>
        </div>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Cosy appartment Paris &rarr;</h2>
            <img src="../appartment_1.png" className={styles.card_img_a}></img>
            <p>50m2 - 1500$/month</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Lovely appartment Berlin &rarr;</h2>
            <img src="../appartment_2.png" className={styles.card_img_a}></img>
            <p>30m2 - 900$/month</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Cosy appartment Warsaw &rarr;</h2>
            <img src="../appartment_3.png" className={styles.card_img_a}></img>
            <p>40m2 - 1400$/month</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Sunny appartment Lisbon &rarr;</h2>
            <img src="../appartment_4.png" className={styles.card_img_a}></img>
            <p>60m2 - 1200$/month</p>
          </a>

          <a href="" className={styles.card}>
            <h2>WoW appartment L.A &rarr;</h2>
            <img src="../appartment_5.png" className={styles.card_img_a}></img>
            <p>500m2 - 15000$/month</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Nerd appartment Talin &rarr;</h2>
            <img src="../appartment_6.png" className={styles.card_img_a}></img>
            <p>150m2 - 999$/month</p>
          </a>

          
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

export default Tenant;
