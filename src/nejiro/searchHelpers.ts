import { ICorporateHolding, ICorporateHoldings, IGroup, IPerson, ITerritorialHolding } from "./IGroup";

export const applySearchToGroup = (group: IGroup, searchTerm: string) => {
  return (
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.people.some((person) => applySearchToPerson(person, searchTerm)) ||
    (group.description && group.description.join().toLowerCase().includes(searchTerm.toLowerCase())) ||
    group.territorialHoldings?.some((holding) => applySearchToTerritory(holding, searchTerm)) ||
    group.corporateHoldings?.some((holding) => applySearchToCorporateHolding(holding, searchTerm))
  );
};

export const applySearchToPerson = (person: IPerson, searchTerm: string) => {
  return (
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.class?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.job?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.relationships?.join().toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const applySearchToTerritory = (holding: ITerritorialHolding, searchTerm: string) => {
  return (
    holding.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (holding.location && holding.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (holding.description && holding.description.join().toLowerCase().includes(searchTerm.toLowerCase()))
  );
};

export const applySearchToCorporateHolding = (holding: ICorporateHoldings, searchTerm: string) => {
  return (
    holding.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (holding.description && holding.description.join().toLowerCase().includes(searchTerm.toLowerCase())) ||
    holding.holdings?.some((item) => applySearchToCorporateItem(item, searchTerm))
  );
};

export const applySearchToCorporateItem = (item: ICorporateHolding, searchTerm: string) => {
  return (
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.description && item.description.join().toLowerCase().includes(searchTerm.toLowerCase())) ||
    item.locations?.some((location) => location.toLowerCase().includes(searchTerm.toLowerCase()))
  );
};
