import React from "react";
import { IGroup } from "./IGroup";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PeopleList } from "./PeopleList";
import { TerritorialHoldings } from "./TerritorialHoldings";
import { CorporateHoldings } from "./CorporateHoldings";

export const GroupDisplay: React.FC<IGroup> = ({
  name,
  owner,
  people,
  description,
  territorialHoldings,
  corporateHoldings,
}) => {
  return (
    <Accordion elevation={2}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box>
          <Typography>
            {name} {owner}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {description?.map((line, index) => (
          <Typography key={index}>{line}</Typography>
        ))}
        <Typography variant={"h6"}>People:</Typography>
        <PeopleList people={people} />
        <Typography variant={"h6"}>Territorial Holdings</Typography>
        <TerritorialHoldings holdings={territorialHoldings ?? []} />
        <CorporateHoldings holdings={corporateHoldings ?? []} />
      </AccordionDetails>
    </Accordion>
  );
};
