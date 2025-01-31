import { eEquipmentType, IMiscellaneous } from "./itemBase";

const beagleActiveProbe: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Beagle Active Probe",
  description: "This item provides the pilot with information about hidden units.",
  slots: 2,
};
const c3Slave: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "C3 Slave",
  description: "Shares telemetry data with other C3 equipped units",
  slots: 1,
};
const shoulder: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Shoulder",
  description: "This item is a shoulder joint.",
  slots: 1,
};
const upperArmActuator: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Upper Arm Actuator",
  description: "This item is an upper arm actuator.",
  slots: 1,
};
const hip: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Hip",
  description: "This item is a hip joint.",
  slots: 1,
};
const upperLegActuator: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Upper Leg Actuator",
  description: "This item is an upper leg actuator.",
  slots: 1,
};
const lowerArmActuator: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Lower Arm Actuator",
  description: "This item is a lower arm actuator.",
  slots: 1,
};
const lowerLegActuator: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Lower Leg Actuator",
  description: "This item is a lower leg actuator.",
  slots: 1,
};
const footActuator: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Foot Actuator",
  description: "This item is a foot actuator.",
  slots: 1,
};

const CASE: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "CASE",
  description: "This item is a CASE.",
  slots: 1,
};

export const randomItems = {
  "Beagle Active Probe": beagleActiveProbe,
  "C3 Slave": c3Slave,
  Shoulder: shoulder,
  "Upper Arm Actuator": upperArmActuator,
  "Lower Arm Actuator": lowerArmActuator,
  Hip: hip,
  "Upper Leg Actuator": upperLegActuator,
  "Lower Leg Actuator": lowerLegActuator,
  "Foot Actuator": footActuator,
  CASE: CASE,
};
