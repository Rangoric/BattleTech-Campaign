import { IGroup } from "@/nejiro/IGroup";

export const RoadsWarriors: IGroup = {
  name: "Road's Warriors",
  description: "Player Faction",
  people: [
    {
      name: "Tai-i Bully Roads",
      title: "CO",
      class: "MechWarrior",
    },
    {
      name: "Nakamura",
      class: "MechWarrior",
    },
    {
      name: "Dusty Roads",
      class: "MechWarrior",
      relationships: ["Younger Brother to Bully Roads"],
    },
    {
      name: "Dan Cannon",
      class: "MechWarrior",
    },
    {
      name: "Hikari",
      description: "Leader - Light: Shining Brilliance - girl",
      age: "17",
      class: "MechWarrior ",
    },
    {
      name: "Hitoshi",
      description: "Equal: Level: Even Tempered",
      age: "15",
      title: "MechWarrior - - ",
      relationships: ["Twin of Haia"],
    },
    {
      name: "Haia",
      description: "Nimble: Quick",
      age: "15",
      title: "MechWarrior ",
      relationships: ["Twin of Hitoshi"],
    },
    {
      name: "Hiryur",
      description: "A Dragon who flies: A versatile and spontaneous individual",
      age: "14",
      title: "MechWarrior",
    },
    {
      name: "Sergeant Vinny Kowalski",
      class: "Tank Commander, Fixer",
    },
  ],
};
