import styles from "./index.module.css";

import IgniteLogo from "../../assets/ignite-logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logo do Ignite" />
    </header>
  );
}
