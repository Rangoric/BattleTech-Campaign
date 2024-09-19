import { useSearchParams } from "next/navigation";
import { groups } from "./data/groups/groups";
import { applySearchToPerson } from "./searchHelpers";
import { PeopleList } from "./PeopleList";

export const People = () => {
  const searchParams = useSearchParams();
  const people = groups.flatMap((group) => group.people);
  const peopleFiltered = people.filter((person) =>
    applySearchToPerson(person, searchParams.get("search") || "")
  );
  return <PeopleList people={peopleFiltered} />;
};
