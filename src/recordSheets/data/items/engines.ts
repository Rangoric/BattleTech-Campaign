import { eEquipmentType, IMiscellaneous } from "./itemBase";

const xlFusionEngine: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "XL Fusion Engine",
  description: "An XL engine weighs less, but takes up crit slots in all torso locations.",
  slots: 3,
};
const gyro: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Gyro",
  description: "A gyro takes up crit slots in the center torso.",
  slots: 4,
};
export const engines = {
  "XL Fusion Engine": xlFusionEngine,
  Gyro: gyro,
};
