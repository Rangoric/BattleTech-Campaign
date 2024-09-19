import React from "react";
import { IGroup } from "./IGroup";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PeopleList } from "./PeopleList";

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
        <PeopleList people={people} />
      </AccordionDetails>
    </Accordion>
  );
};
