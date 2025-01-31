import { eEquipmentType, IHeatSink } from "./itemBase";

const doubleHeatSink: IHeatSink = {
  type: eEquipmentType.HeatSink,
  name: "Double Heat Sink",
  description: "A double heat sink is more efficient than a standard heat sink.",
  slots: 3,
  rating: 2,
};
export const heatSinks = {
  "Double Heat Sink": doubleHeatSink,
};
