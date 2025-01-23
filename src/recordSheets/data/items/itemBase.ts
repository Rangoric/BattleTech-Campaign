export const Items = { Empty: { name: "Empty", description: "User when an empty crit slot is needed", slots: 1 } };

export interface IEquipment {
  name: string;
  description: string;
  slots: number;
}
