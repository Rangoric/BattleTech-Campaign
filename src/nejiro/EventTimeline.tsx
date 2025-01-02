import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import {
  Accordion,
  AccordionSummary,
  Box,
  Typography,
  AvatarGroup,
  AccordionDetails,
} from "@mui/material";
import Link from "next/link";
import { PersonAvatar } from "./PersonAvatar";
import { IEvents } from "./IEvents";
import React from "react";
import { DetailsDisplay } from "./DetailsDisplay";

export interface IEventTimelineProps {
  filteredEvents: IEvents;
}

export const EventTimeline: React.FC<IEventTimelineProps> = ({
  filteredEvents,
}) => {
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
          <TimelineOppositeContent color="textSecondary">
            {event.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Accordion elevation={3}>
              <AccordionSummary>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Typography variant={"h6"}>{event.title}</Typography>
                    <Typography>{event.summary}</Typography>
                  </Box>
                  {event.involvedPeople.length > 0 && (
                    <AvatarGroup max={10}>
                      {event.involvedPeople.map((person) => (
                        <PersonAvatar key={person} personName={person} />
                      ))}
                    </AvatarGroup>
                  )}
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <DetailsDisplay details={event.details} />
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
                          <a
                            href={link.url}
                            target={"_blank"}
                            rel={"noreferrer"}
                          >
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
