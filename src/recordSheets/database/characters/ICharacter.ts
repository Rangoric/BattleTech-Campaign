import { AllUnitDesignations } from "..";

export interface ICharacter {
  callSign: string;
  name: string;
  usuallyPilots: AllUnitDesignations[];
  gunnery?: number;
  piloting?: number;
  infantrySkill?: number;
}
