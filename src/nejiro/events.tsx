import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { vohEvents } from "./data/events/ValkyriesOfHanakotoba.events";
import { Accordion, AccordionDetails, AccordionSummary, AvatarGroup, Box, Typography } from "@mui/material";
import Link from "next/link";
import { PersonAvatar } from "./PersonAvatar";

export const Events = () => {
  const filteredEvents = vohEvents;

  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {filteredEvents.map((event) => (
        <TimelineItem key={event.title}>
          <TimelineOppositeContent color="textSecondary">{event.time}</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            {event.involvedPeople.length > 0 && (
              <AvatarGroup>
                {event.involvedPeople.map((person) => (
                  <PersonAvatar key={person} personName={person} />
                ))}
              </AvatarGroup>
            )}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Accordion elevation={3}>
              <AccordionSummary>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                  <Box>
                    <Typography variant={"h6"}>{event.title}</Typography>
                    <Typography>{event.summary}</Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{event.details}</Typography>
                {event.referencePages.length > 0 && (
                  <Box>
                    <Typography variant={"h6"}>Reference Pages</Typography>
                    <ul>
                      {event.referencePages.map((link) => (
                        <li key={link.name}>
                          <Link href={link.url}>{link.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}
                {event.outsideLinks.length > 0 && (
                  <Box>
                    <Typography variant={"h6"}>Sources</Typography>
                    <ul>
                      {event.outsideLinks.map((link) => (
                        <li key={link.name}>
                          <a href={link.url} target={"_blank"} rel={"noreferrer"}>
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}
              </AccordionDetails>
            </Accordion>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
