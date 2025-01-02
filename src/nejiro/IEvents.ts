import { ISources } from "./ISources";

export interface IEvent {
  time: string;
  title: string;
  summary: string;
  involvedPeople: string[];
  mentionedPeople: string[];
  details?: string;
  outsideLinks: ISources;
  referencePages: ISources;
}

export type IEvents = IEvent[];
