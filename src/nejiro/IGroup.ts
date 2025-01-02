import { ISources } from "./ISources";

export interface IPerson {
  name: string;
  languages?: string[];
  description?: string[];
  // Official Title
  title?: string;
  // What they can command
  class?: string;
  // Job outside of command structure
  job?: string;
  // Relationships with other people
  relationships?: string[];
  // Age is just a number, but should be represented by a string
  age?: string;
  // Location of the token for this character
  token?: string;
  // Location of the turnabout image
  profile?: string;
}

export interface ITerritorialHolding {
  name: string;
  size?: string;
  location?: string;
  description?: string[];
}

export interface ICorporateHoldings {
  name: string;
  description?: string[];
  holdings?: ICorporateHolding[];
}

export interface ICorporateHolding {
  name: string;
  description?: string[];
  locations?: string[];
}

export interface IGroup {
  name: string;
  owner: string;
  map?: {
    mapName: string;
    right: number;
    up: number;
  };
  sources?: ISources;
  description?: string[];
  people: IPerson[];
  territorialHoldings?: ITerritorialHolding[];
  corporateHoldings?: ICorporateHoldings[];
}
