import styles from "./Header.module.css";
import { PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren<any>) => {
  return <div className={styles.wrapper}>{children}</div>;
};
