import styles from "./ErrorScreen.module.css";
import { PropsWithChildren } from "react";

type ErrorScreenProps = {
  errorMessage: string;
};

export const ErrorScreen = ({
  errorMessage,
  children,
}: PropsWithChildren<ErrorScreenProps>) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.message}>{errorMessage}</h1>
      {children}
    </div>
  );
};
