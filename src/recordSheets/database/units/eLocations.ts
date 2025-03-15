export enum eLocations {
  Head = "Head",
  CenterTorso = "Center Torso",
  LeftTorso = "Left Torso",
  LeftArm = "Left Arm",
  LeftLeg = "Left Leg",
  RightTorso = "Right Torso",
  RightArm = "Right Arm",
  RightLeg = "Right Leg",
}

export const ShortLocationNames: Record<eLocations, string> = {
  [eLocations.Head]: "H",
  [eLocations.CenterTorso]: "CT",
  [eLocations.LeftTorso]: "LT",
  [eLocations.LeftArm]: "LA",
  [eLocations.LeftLeg]: "LL",
  [eLocations.RightTorso]: "RT",
  [eLocations.RightArm]: "RA",
  [eLocations.RightLeg]: "RL",
};
