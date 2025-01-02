import { useState } from "react";
import { vohEvents } from "./data/events/ValkyriesOfHanakotoba.events";
import { EventTimeline } from "./EventTimeline";
import { Box, Button, Typography } from "@mui/material";
import { PersonAvatar } from "./PersonAvatar";

export const Events = () => {
  const [selectedPerson, setSelectedPerson] = useState<string | undefined>();
  const allPeople = [...new Set(vohEvents.flatMap((event) => event.involvedPeople.concat(event.mentionedPeople)))].toSorted();
  const filteredEvents = vohEvents.filter(
    (event) => !selectedPerson || event.involvedPeople.includes(selectedPerson) || event.mentionedPeople.includes(selectedPerson)
  );

  return (
    <>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Button onClick={() => setSelectedPerson(undefined)}>Anyone</Button>
        {allPeople.map((personName) => (
          <Button key={personName} onClick={() => setSelectedPerson(personName)} variant={selectedPerson === personName ? "contained" : "outlined"}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <PersonAvatar personName={personName} />
              <Typography>{personName}</Typography>
            </Box>
          </Button>
        ))}
      </Box>
      <EventTimeline filteredEvents={filteredEvents} />
    </>
  );
};
