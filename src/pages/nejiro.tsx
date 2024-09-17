import { Framework } from "@/layout/Framework";
import { Events } from "@/nejiro/events";
import { Groups } from "@/nejiro/groups";
import { Locations } from "@/nejiro/locations";
import { People } from "@/nejiro/people";
import { Box, Tab, Tabs } from "@mui/material";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Maps = dynamic(() => import("@/nejiro/maps").then((t) => t.Maps), {
  ssr: false,
});

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabs = [
  {
    label: "Maps",
    component: Maps,
  },
  {
    label: "Locations",
    component: Locations,
  },
  {
    label: "Groups",
    component: Groups,
  },
  {
    label: "People",
    component: People,
  },
  {
    label: "Events",
    component: Events,
  },
];

const Page = () => {
  const searchParams = useSearchParams();
  const [activeIndex, setActiveIndex] = useState<number>(
    +(searchParams.get("section") ?? 0)
  );
  const ActiveTab = tabs[activeIndex].component;
  return (
    <Framework>
      <Box>
        <Tabs
          value={activeIndex}
          onChange={(event, newValue) => setActiveIndex(newValue)}
        >
          {tabs.map((t, index) => (
            <Tab label={t.label} {...a11yProps(index)} key={t.label} />
          ))}
        </Tabs>
        <Box>
          <ActiveTab />
        </Box>
      </Box>
    </Framework>
  );
};

export default Page;
