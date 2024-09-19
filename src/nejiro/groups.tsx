import { useSearchParams } from "next/navigation";
import { groups } from "./data/groups/groups";
import { GroupList } from "./GroupList";
import { applySearchToGroup } from "./searchHelpers";

export const Groups = () => {
  const searchParams = useSearchParams();
  const filterTerm = searchParams.get("search") || "";
  const filteredGroups = groups.filter((group) => {
    if (filterTerm === "") {
      return true;
    }
    const good = applySearchToGroup(group, filterTerm);
    return good;
  });
  return <GroupList groups={filteredGroups} />;
};
