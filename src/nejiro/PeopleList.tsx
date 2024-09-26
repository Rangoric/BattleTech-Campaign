import { Box, Typography } from "@mui/material";
import { IPerson } from "./IGroup";
import { PersonDisplay } from "./PersonDisplay";

export interface IPeopleListProps {
  people: IPerson[];
}

export const PeopleList = ({ people }: IPeopleListProps) => {
  return (
    <>
      {people.length > 0 && <Typography variant={"h6"}>People:</Typography>}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {people.map((person, index) => (
          <PersonDisplay key={index} person={person} />
        ))}
      </Box>
    </>
  );
};
