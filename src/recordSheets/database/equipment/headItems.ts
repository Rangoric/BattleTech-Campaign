import { eEquipmentType, IMiscellaneous } from "./itemBase";

const lifeSupport: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Life Support",
  description: "This item provides the pilot with oxygen and temperature control.",
  slots: 1,
};
const sensors: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Sensors",
  description: "This item provides the pilot with information about the battlefield.",
  slots: 1,
};
const cockpit: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Cockpit",
  description: "This item is where the pilot sits and controls the mech.",
  slots: 1,
};
export const headItems = {
  "Life Support": lifeSupport,
  Sensors: sensors,
  Cockpit: cockpit,
};
