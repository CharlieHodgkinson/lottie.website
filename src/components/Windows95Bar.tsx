import { PropsWithChildren } from "react";
import styles from "./Windows95Bar.module.css";

type Windows95BarProps = PropsWithChildren<{
  className?: string;
}>;

export const Windows95Bar = ({ children, className = "" }: Windows95BarProps) => {
  return <div className={`${styles.windows95Bar} ${className}`}>{children}</div>;
};
