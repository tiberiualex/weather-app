import Image from "next/image";
import styles from "./MetricsCard.module.css";

type MetricsCardProps = {
  title: string;
  iconSrc: string;
  metric: string | number;
  unit?: string;
};

export const MetricsCard = ({
  title,
  iconSrc,
  metric,
  unit,
}: MetricsCardProps) => {
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <div className={styles.content}>
        <Image width="100px" height="100px" src={iconSrc} alt="weatherIcon" />
        <div>
          <h1>{metric}</h1>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  );
};
