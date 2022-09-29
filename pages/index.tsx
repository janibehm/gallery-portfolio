import React from "react";
import Head from "next/head";
import styles from "../styles/FrontNav.module.css";
import NavBar from "../components/NavBar";

// Landing page of the app

export default function Home() {
  return (
    <>
      <Head>
        <meta name="image-gallery" content="image-gallery" />
      </Head>
      <div className={styles.homePageNavContainer}>
        <div className={styles.frontNav}>
          <nav>
            <NavBar />
          </nav>
        </div>
      </div>
      <div className={styles.homePageTextContainer}>
        <p className={styles.homePageTextContainer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas
          odit quaerat autem! Eos culpa aliquam nostrum tempore modi, tenetur
          vero, iste ea nam repudiandae accusamus amet architecto dolorem quas.
        </p>
      </div>
    </>
  );
}
