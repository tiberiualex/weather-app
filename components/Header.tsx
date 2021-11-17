import styles from "./Header.module.css";

export const Header = ({ children }: any) => {
  return <div className={styles.wrapper}>{children}</div>;
};
