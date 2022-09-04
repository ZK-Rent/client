import * as React from 'react'
import styles from '../styles/Home.module.css';
const NavbarScroller = () => {
  return (
    <div>
        <img src="../logo.png" className={styles.card_img_ld} ></img>
        <a className={styles.logo_blase} href="/">ZK-Rent</a>
    </div>
  )
}

export default NavbarScroller;