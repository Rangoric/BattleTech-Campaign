import { eLocations } from "./IRecordSheet";
import { eIncomingFireDirection } from "./eIncomingFireDirection";

export const HitLocationFromDirection: Record<eIncomingFireDirection, Record<eLocations, number[]>> = {
  [eIncomingFireDirection.front]: {
    [eLocations.centerTorso]: [2, 7],
    [eLocations.rightArm]: [3, 4],
    [eLocations.rightLeg]: [5],
    [eLocations.rightTorso]: [6],
    [eLocations.leftTorso]: [8],
    [eLocations.leftLeg]: [9],
    [eLocations.leftArm]: [10, 11],
    [eLocations.head]: [12],
  },
  [eIncomingFireDirection.rear]: {
    [eLocations.centerTorso]: [2, 7],
    [eLocations.rightArm]: [3, 4],
    [eLocations.rightLeg]: [5],
    [eLocations.rightTorso]: [6],
    [eLocations.leftTorso]: [8],
    [eLocations.leftLeg]: [9],
    [eLocations.leftArm]: [10, 11],
    [eLocations.head]: [12],
  },
  [eIncomingFireDirection.left]: {
    [eLocations.leftTorso]: [2, 7],
    [eLocations.leftLeg]: [3, 6],
    [eLocations.leftArm]: [4, 5],
    [eLocations.centerTorso]: [8],
    [eLocations.rightTorso]: [9],
    [eLocations.rightArm]: [10],
    [eLocations.rightLeg]: [11],
    [eLocations.head]: [12],
  },
  [eIncomingFireDirection.right]: {
    [eLocations.rightTorso]: [2, 7],
    [eLocations.rightLeg]: [3, 6],
    [eLocations.rightArm]: [4, 5],
    [eLocations.centerTorso]: [8],
    [eLocations.leftTorso]: [9],
    [eLocations.leftLeg]: [10],
    [eLocations.leftArm]: [11],
    [eLocations.head]: [12],
  },
};
