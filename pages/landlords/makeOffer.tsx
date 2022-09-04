import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import NavbarScroller from '../nav_logo';

import * as React from 'react';

import { usePrepareContractWrite, useContractWrite } from 'wagmi';

import offerFactoryABI from "../../artifacts/contracts/OfferFactory.sol/OfferFactory.json";

const makeOffer: NextPage = () => {

  const [description, setDescription] = React.useState('');
  const [incomeRequirement, setIncomeRequirement] = React.useState('');
  const [depositRequirement, setDepositRequirement] = React.useState('');

  const { config } = usePrepareContractWrite({
    addressOrName: '0x8fd720Fb3F96859A90135c5efc74901B3cA18443',
    contractInterface: offerFactoryABI,
    functionName: 'newOffer',
  })

  const { write } = useContractWrite({
    ...config,
    functionName: 'newOffer',
    args: [description,incomeRequirement,depositRequirement],
  })

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
            Description :
            <input type="text" name="description" onchange={(e) => setDescription(e.target.value)} />
          </label>
          <label className={styles.my_input}>
            Income requirement :
            <input type="text" name="income" onchange={(e) => setIncomeRequirement(e.target.value)}/>
          </label>
          <label className={styles.my_input}>
            Deposit amount :
            <input type="text" name="deposit_amount" onchange={(e) => setDepositRequirement(e.target.value)}/>
          </label>
          <input disabled={!write} onClick={() => write?.()} type="submit" value="Create offer" />
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
