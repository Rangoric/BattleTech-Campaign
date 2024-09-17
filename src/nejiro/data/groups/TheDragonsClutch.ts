import { IGroup } from "@/nejiro/IGroup";

export const TheDragonsClutch: IGroup = {
  name: `The Dragon's Clutch`,
  description: "Player Faction",
  people: [
    {
      name: "Doctor Kiko Musashi",
      title: "CO, Chief Medical Officer",
    },
    {
      name: "Chu-i Miyamoto 'Bisho' Musashi",
      class: "MechWarrior",
      relationships: ["Eldest Grandson Dr. Musashi"],
    },
    {
      name: "Shiro 'Baka' Musashi",
      class: "MechWarrior",
      relationships: ["Younger Grandson Dr. Musashi"],
    },
    {
      name: "Kashira Blain 'Talon' Hasagawa",
      class: "MechWarrior",
    },
    {
      name: "Gunsho Kumiko Tan",
      class: "VTOL Pilot",
    },
    {
      name: "'Topcat' Hampton",
      class: "A.P.C. Commander",
    },
    {
      name: "Tai-i Sergeant Adrian Tan",
      title: "XO, Infantry CO",
      class: "Battle Armor Squad Leader",
    },
    {
      name: "Ranmaru Ikeda",
      class: "Battle Armor Squad Leader",
    },
    {
      name: "'Rash' Hampton",
      class: "Battle Armor Squad Leader",
    },
    {
      name: "Kashira Blain Hasagawa",
      class: "Battle Armor Squad Leader",
    },
    {
      name: "Sho-ko Isoroku Nakajima",
      title: "Chief Technician, Sr NCO",
    },
    {
      name: "Kashira Nuku 'Nuke' Kitakam",
      title: "Chief Mech Technician",
    },
  ],
};
