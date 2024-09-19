import { Box } from "@mui/material";
import { IGroup } from "./IGroup";
import { GroupDisplay } from "./GroupDisplay";

interface IGroupListProps {
  groups: IGroup[];
}

export const GroupList = ({ groups }: IGroupListProps) => {
  return (
    <Box>
      {groups.map((group, index) => (
        <GroupDisplay key={index} {...group} />
      ))}
    </Box>
  );
};
