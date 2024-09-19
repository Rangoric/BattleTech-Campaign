import { Box, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import React from "react";
import { HeaderSearch } from "./HeaderSearch";
import { useSearchParams } from "next/navigation";

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
    label: "Maps",
    url: "/nejiro",
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

export const NejiroHeader: React.FC<INejiroTabsProps> = ({
  activeLabel = "Maps",
}) => {
  const searchParams = useSearchParams();
  return (
    <Box>
      <HeaderSearch />
      <Tabs
        value={tabs.findIndex((t) => t.label === activeLabel)}
        variant="scrollable"
        visibleScrollbar
      >
        {tabs.map((t, index) => (
          <Tab
            label={t.label}
            {...a11yProps(index)}
            key={t.label}
            href={`${t.url}?${searchParams}`}
            component={Link}
          />
        ))}
      </Tabs>
    </Box>
  );
};
