import { useState } from "react";
import { vohEvents } from "./data/events/ValkyriesOfHanakotoba.events";
import { EventTimeline } from "./EventTimeline";
import { Box, Button, Typography } from "@mui/material";
import { PersonAvatar } from "./PersonAvatar";
import { applySearchToEvent } from "./searchHelpers";
import { useSearchParams } from "next/navigation";

export const Events = () => {
  const [selectedPerson, setSelectedPerson] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const filterTerm = searchParams.get("search") || "";
  const filteredEvents = vohEvents.filter(
    (t) => !filterTerm || applySearchToEvent(t, filterTerm)
  );

  const allPeople = [
    ...new Set(
      filteredEvents.flatMap((event) =>
        event.involvedPeople.concat(event.mentionedPeople)
      )
    ),
  ].toSorted();

  const personEvents = filteredEvents.filter(
    (event) =>
      !selectedPerson ||
      event.involvedPeople.includes(selectedPerson) ||
      event.mentionedPeople.includes(selectedPerson)
  );

  return (
    <>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Button onClick={() => setSelectedPerson(undefined)}>Anyone</Button>
        {allPeople.map((personName) => (
          <Button
            key={personName}
            onClick={() => setSelectedPerson(personName)}
            variant={selectedPerson === personName ? "contained" : "outlined"}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <PersonAvatar personName={personName} />
              <Typography>{personName}</Typography>
            </Box>
          </Button>
        ))}
      </Box>
      <EventTimeline filteredEvents={personEvents} />
    </>
  );
};
