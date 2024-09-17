export interface IPerson {
  name: string;
  description?: string;
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
}

export interface IGroup {
  name: string;
  description: string;
  people: IPerson[];
}
