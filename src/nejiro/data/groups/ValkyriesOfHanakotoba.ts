/*
Valkyries of Hanakotoba
Jasmine Or’lient						Unit CO
Kem Icetoff						Unit XO
Ranger Icetoff						Sr. NCO
Ambrosia Or’lient					Lance CO
Orchid Or’lient						Lance XO
Armia Kazutomo					Armored Platoon CO
Akira Or’lient						Armored Platoon XO
Iris Or’lient						Infantry Platoon CO
Amber Or’lient						Infantry Platoon XO
Ulam							Chief Tech
Starr Icetoff						Sr. Medical Officer
Daisy Or’lient						Communications/Diplomatic Officer
*/

import { IGroup } from "@/nejiro/IGroup";

export const ValkyriesOfHanakotoba: IGroup = {
  name: `Valkyries of Hanakotoba`,
  description: "Player Faction",
  people: [
    {
      name: "Jasmine Or’lient",
      title: "Unit CO",
      class: "MechWarrior",
    },
    {
      name: "Kem Icetoff",
      title: "Unit XO",
      class: "Armour Commander",
    },
    {
      name: "Ranger Icetoff",
      title: "Sr. NCO",
      class: "Battle Armour Squad Leader",
    },
    {
      name: "Ambrosia Or’lient",
      title: "Lance CO",
      class: "MechWarrior",
    },
    {
      name: "Orchid Or’lient",
      title: "Lance XO",
      class: "MechWarrior",
    },
    {
      name: "Armia Kazutomo",
      title: "Armored Platoon CO",
      class: "Tank Commander",
    },
    {
      name: "Akira Or’lient",
      title: "Armored Platoon XO",
      class: "Tank Commander",
    },
    {
      name: "Iris Or’lient",
      title: "Infantry Platoon CO",
      class: "Infantry Commander",
    },
    {
      name: "Amber Or’lient",
      title: "Infantry Platoon XO",
      class: "Infantry Commander",
    },
    {
      name: "Ulam",
      title: "Chief Tech",
    },
    {
      name: "Starr Icetoff",
      title: "Sr. Medical Officer",
    },
    {
      name: "Daisy Or’lient",
      title: "Communications/Diplomatic Officer",
    },
  ],
};
