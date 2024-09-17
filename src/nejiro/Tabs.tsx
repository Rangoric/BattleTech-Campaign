import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import React from "react";

interface INejiroTabsProps {
  activeLabel?:
    | "Maps"
    | "Search"
    | "Locations"
    | "Groups"
    | "People"
    | "Events";
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabs = [
  {
    label: "Search",
    url: "/nejiro",
  },
  {
    label: "Maps",
    url: "/nejiro/maps",
  },
  {
    label: "Locations",
    url: "/nejiro/locations",
  },
  {
    label: "Groups",
    url: "/nejiro/groups",
  },
  {
    label: "People",
    url: "/nejiro/people",
  },
  {
    label: "Events",
    url: "/nejiro/events",
  },
];

export const NejiroTabs: React.FC<INejiroTabsProps> = ({
  activeLabel = "Search",
}) => {
  return (
    <Tabs value={tabs.findIndex((t) => t.label === activeLabel)}>
      {tabs.map((t, index) => (
        <Tab
          label={t.label}
          {...a11yProps(index)}
          key={t.label}
          href={t.url}
          component={Link}
        />
      ))}
    </Tabs>
  );
};
