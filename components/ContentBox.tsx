import styles from "./ContentBox.module.css";

export const ContentBox = ({ children }: any) => {
  return <div className={styles.wrapper}>{children}</div>;
};
