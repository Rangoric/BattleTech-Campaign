import { ClientUrls } from "@/utilities/ClientUrls";
import { groups } from "./groups";

export const getTokenOfPerson = (personName: string) => {
  const person = groups
    .flatMap((group) => group.people)
    .find((person) => person.name === personName);
  return person?.token ? ClientUrls.images(person.token) : undefined;
};
export const getProfileSpinnerOfPerson = (personName: string) => {
  const person = groups
    .flatMap((group) => group.people)
    .find((person) => person.name === personName);
  return person?.profile ? ClientUrls.images(person.profile) : undefined;
};
