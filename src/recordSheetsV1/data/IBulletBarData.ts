import { ReactNode } from "react";

export type IBulletBarData = Array<{
  id: string | number;
  title?: ReactNode;
  subtitle?: ReactNode;
  ranges: number[];
  measures: number[];
  markers?: number[];
}>;
