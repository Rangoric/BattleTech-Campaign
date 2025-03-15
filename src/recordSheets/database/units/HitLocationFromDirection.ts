import { IBattleMechLocations } from "../../../recordSheetsV1/data/IRecordSheets";
import { eIncomingFireDirection } from "./eIncomingFireDirection";
import { eLocations } from "./eLocations";

export const HitLocationFromDirection: Record<
  eIncomingFireDirection,
  Record<keyof IBattleMechLocations<object>, number[]>
> = {
  [eIncomingFireDirection.front]: {
    [eLocations.CenterTorso]: [2, 7],
    [eLocations.RightArm]: [3, 4],
    [eLocations.RightLeg]: [5],
    [eLocations.RightTorso]: [6],
    [eLocations.LeftTorso]: [8],
    [eLocations.LeftLeg]: [9],
    [eLocations.LeftArm]: [10, 11],
    [eLocations.Head]: [12],
  },
  [eIncomingFireDirection.rear]: {
    [eLocations.CenterTorso]: [2, 7],
    [eLocations.RightArm]: [3, 4],
    [eLocations.RightLeg]: [5],
    [eLocations.RightTorso]: [6],
    [eLocations.LeftTorso]: [8],
    [eLocations.LeftLeg]: [9],
    [eLocations.LeftArm]: [10, 11],
    [eLocations.Head]: [12],
  },
  [eIncomingFireDirection.left]: {
    [eLocations.LeftTorso]: [2, 7],
    [eLocations.LeftLeg]: [3, 6],
    [eLocations.LeftArm]: [4, 5],
    [eLocations.CenterTorso]: [8],
    [eLocations.RightTorso]: [9],
    [eLocations.RightArm]: [10],
    [eLocations.RightLeg]: [11],
    [eLocations.Head]: [12],
  },
  [eIncomingFireDirection.right]: {
    [eLocations.RightTorso]: [2, 7],
    [eLocations.RightLeg]: [3, 6],
    [eLocations.RightArm]: [4, 5],
    [eLocations.CenterTorso]: [8],
    [eLocations.LeftTorso]: [9],
    [eLocations.LeftLeg]: [10],
    [eLocations.LeftArm]: [11],
    [eLocations.Head]: [12],
  },
};
