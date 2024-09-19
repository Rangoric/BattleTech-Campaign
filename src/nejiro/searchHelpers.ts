import { IGroup, IPerson } from "./IGroup";

export const applySearchToGroup = (group: IGroup, searchTerm: string) => {
  return (
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.people.some((person) => applySearchToPerson(person, searchTerm))
  );
};

export const applySearchToPerson = (person: IPerson, searchTerm: string) => {
  return (
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (person.title &&
      person.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.class &&
      person.class.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.job &&
      person.job.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.relationships &&
      person.relationships
        .join()
        .toLowerCase()
        .includes(searchTerm.toLowerCase()))
  );
};
