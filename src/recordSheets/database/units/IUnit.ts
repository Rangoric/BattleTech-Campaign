export enum eUnitType {
  Mech = "Mech",
  Vehicle = "Vehicle",
  BattleArmor = "Battle Armor",
  Infantry = "Infantry",
}

export enum eMovementMode {
  stationary = "Stationary",
  walking = "Walking",
  running = "Running",
  jumping = "Jumping",
  prone = "Prone",
}

export interface IUnit {
  type: eUnitType;
  designation: string;
  tonnage: number;
  movement: {
    currentMode: eMovementMode;
    walkSpeed: number;
    runSpeed: number;
    jumpSpeed?: number;
  };
}
