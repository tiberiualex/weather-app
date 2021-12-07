import styles from "./ContentBox.module.css";
import { PropsWithChildren } from "react";

export const ContentBox = ({ children }: PropsWithChildren<any>) => {
  return <div className={styles.wrapper}>{children}</div>;
};
