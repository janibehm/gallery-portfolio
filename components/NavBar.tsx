import Link from "next/link";
import styles from "../styles/FrontNav.module.css";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className={styles.homePageNavContainer}>
        <div className={styles.frontNav}>
          <nav>
            <Link href="/">
              <a>HOME</a>
            </Link>
            <Link href="/gallery">
              <a>GALLERY</a>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
