import { PropsWithChildren } from "react";

type Windows95BarProps = PropsWithChildren<{
  className?: string;
}>;

export const Windows95Bar = ({ children, className = "" }: Windows95BarProps) => {
  return <div className={`windows95-bar ${className}`}>{children}</div>;
};
