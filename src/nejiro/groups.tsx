import { Box } from "@mui/material";
import { groups } from "./data/groups/groups";
import { GroupCard } from "./GroupCard";

export const Groups = () => {
  return (
    <Box>
      {groups.map((group, index) => (
        <GroupCard key={index} {...group} />
      ))}
    </Box>
  );
};
