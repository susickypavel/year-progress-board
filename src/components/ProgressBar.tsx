import React from "react";

import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  /**
   * Title of the progress
   */
  title: string;
  /**
   * Fill width size in %
   */
  fill_value: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  title,
  fill_value = 0,
}) => {
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressBar__fill}
        style={{
          width: `${fill_value}%`,
        }}
      />
      <h2 className={styles.progressBar__title}>
        {title} ({fill_value}%)
      </h2>
    </div>
  );
};
