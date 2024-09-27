import React from "react";
import { IGroup } from "./IGroup";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PeopleList } from "./PeopleList";
import { TerritorialHoldings } from "./TerritorialHoldings";
import { CorporateHoldings } from "./CorporateHoldings";
import { GroupMapDisplay } from "./GroupMapDisplay";

export const GroupDisplay: React.FC<IGroup> = ({
  name,
  owner,
  sources,
  people,
  description,
  territorialHoldings,
  corporateHoldings,
  map,
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
        {map && <GroupMapDisplay data={map} />}
        {description?.map((line, index) => (
          <Typography key={index}>{line}</Typography>
        ))}
        <PeopleList people={people} />
        <TerritorialHoldings holdings={territorialHoldings ?? []} />
        <CorporateHoldings holdings={corporateHoldings ?? []} />
        {sources && (
          <Typography>
            Source(s):
            {sources.map((t) => (
              <Link sx={{ paddingLeft: 1 }} href={t.url} key={t.url}>
                {t.name}
              </Link>
            ))}
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};
