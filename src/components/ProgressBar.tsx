import React from "react";

import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  /**
   * Fill width size in %
   */
  title: string;
  fill_value: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  title,
  fill_value = 0,
}) => {
  return (
    <div className={styles.progressBar}>
      <div
        style={{
          height: "100%",
          width: `${fill_value}%`,
          background: "lime",
          opacity: 0.5,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <h2 style={{ fontSize: "24px" }}>{title}</h2>
    </div>
  );
};
