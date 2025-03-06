import { eMovementSpeed } from "../data/ActiveSheets";

export const movementShootingModifier = (movementSpeed: eMovementSpeed) => {
  switch (movementSpeed) {
    case eMovementSpeed.ping:
      return 0;
    case eMovementSpeed.walk:
      return 1;
    case eMovementSpeed.run:
      return 2;
    case eMovementSpeed.jump:
      return 3;
    default:
      return 0;
  }
};
