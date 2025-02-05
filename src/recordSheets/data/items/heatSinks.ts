import { eEquipmentType, IHeatSink } from "./itemBase";

const doubleHeatSink: IHeatSink = {
  type: eEquipmentType.HeatSink,
  name: "Double Heat Sink",
  description:
    "A double heat sink is more efficient than a standard heat sink.",
  slots: 3,
  rating: 2,
};
const singleHeatSink: IHeatSink = {
  type: eEquipmentType.HeatSink,
  name: "Single Heat Sink",
  description: "A single heat sink is the standard heat sink.",
  slots: 1,
  rating: 1,
};
export const heatSinks = {
  "Double Heat Sink": doubleHeatSink,
  "Single Heat Sink": singleHeatSink,
};
