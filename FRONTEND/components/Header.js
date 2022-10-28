import Link from "next/link";
import styles from "../styles/Header.module.css";
import Head from "next/head";

export default function Header() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Employee Management App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Employee Management App</Link>
    </div>
  );
}
