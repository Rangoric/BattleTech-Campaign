import React from "react";
import { IGroup } from "./IGroup";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PersonCard } from "./PersonCard";

export const GroupDisplay: React.FC<IGroup> = ({
  name,
  owner: description,
  people,
}) => {
  return (
    <Accordion elevation={2}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {name} {description}
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {people.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
