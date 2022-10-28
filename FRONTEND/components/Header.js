import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">Employee Management App</Link>
    </div>
  );
}
