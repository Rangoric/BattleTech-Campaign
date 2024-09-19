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
}

export interface IGroup {
  name: string;
  owner: string;
  people: IPerson[];
}
