import Link from 'next/link';
import * as React from 'react'
import styles from '../styles/Home.module.css';
const NavbarScroller = () => {
  return (
    <div>
        <img src="../logo.png" className={styles.card_img_ld} ></img>
        <Link className={styles.logo_blase} href="/">ZK-Rent</Link>
    </div>
  )
}

export default NavbarScroller;