import { Framework } from "@/layout/Framework";
import { Box, Card, CardContent, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { ReactNode, useState } from "react";

const ResponsiveTree = dynamic(
  () => import("@nivo/tree").then((m) => m.ResponsiveTree),
  { ssr: false }
);

const theme = {
  background: "#0e1317",
  axis: {
    domain: {
      line: {
        strokeWidth: 0,
        stroke: "#526271",
      },
    },
    ticks: {
      line: {
        strokeWidth: 1,
        stroke: "#526271",
      },
      text: {
        fill: "#8d9cab",
        fontSize: 11,
      },
    },
    legend: {
      text: {
        fill: "#ccd7e2",
        fontSize: 13,
        fontWeight: 500,
      },
    },
  },
  grid: {
    line: {
      stroke: "#444",
    },
  },
  legends: {
    text: {
      fontSize: 12,
      fill: "#8d9cab",
    },
    ticks: {
      line: {
        strokeWidth: 1,
        stroke: "#c8d4e0",
      },
      text: {
        fill: "#8d9cab",
        fontSize: 10,
      },
    },
    title: {
      text: {
        fill: "#ccd7e2",
        fontSize: 10,
        fontWeight: 800,
      },
    },
  },
  tooltip: {
    container: {
      fontSize: "13px",
      background: "#000",
      color: "#ddd",
    },
  },
  labels: {
    text: {
      fill: "#ddd",
      fontSize: 12,
      fontWeight: 500,
    },
  },
  dots: {
    text: {
      fill: "#bbb",
      fontSize: 12,
    },
  },
  annotations: {
    text: {
      fill: "#dddddd",
      outlineWidth: 1.5,
      outlineColor: "#0e1317",
      outlineOpacity: 0.35,
    },
    link: {
      stroke: "#b2bfcb",
      strokeWidth: 1.5,
      outlineWidth: 2.5,
      outlineColor: "#0e1317",
      outlineOpacity: 0.35,
    },
    outline: {
      stroke: "#b2bfcb",
      strokeWidth: 1.5,
      outlineWidth: 2.5,
      outlineColor: "#0e1317",
      outlineOpacity: 0.35,
    },
    symbol: {
      fill: "#b2bfcb",
      outlineWidth: 2,
      outlineColor: "#0e1317",
      outlineOpacity: 0.35,
    },
  },
};
interface ITrainingData {
  name: string;
  description: string;
  bonus: string;
  time?: number;
  children?: ITrainingData[];
}
const trainingData: ITrainingData = {
  name: "Available Training",
  description: "Available to any unit",
  bonus: "Talk to your GM today to get training",
  children: [
    {
      name: "Basic Survival",
      description: "Teaches basic wilderness survival",
      bonus: "Unit gets +1 on Survival Rolls",
      time: 2,
      children: [
        {
          name: "Advanced Survival",
          description: "Teaches advanced survival skills and evasion.",
          bonus: "Unit gets +2 on Survival Rolls, and +1 on Evasion Rolls",
          time: 4,
        },
      ],
    },
    {
      name: "Advanced Infantry Tactics",
      description: "Gives infantry and supporting unit +1 to skill levels.",
      bonus:
        "If support unit has LRMs, spotting for indirect fire by attached infantry gets -1 on roll",
      time: 6,
      children: [
        {
          name: "Scout Sniper Basic",
          description:
            "Teaches infantry how to scout, camo basics, perform intel gathering and sharp shooting.",
          bonus: "Unit gets +1 on perception rolls, -1 to ranged shots",
          time: 12,
          children: [
            {
              name: "Scout Sniper Advanced",
              description:
                "Teach scout sniper teams advanced scouting, advanced camo, advanced intel and precision shooting.",
              bonus:
                "Unit gets +2 on perception rolls, -1 to ranged shots, -1 to detection rolls, and +1 to skill level",
              time: 12,
            },
          ],
        },
      ],
    },
    {
      name: "Security Military Police",
      description:
        "Teaches unit military law and how to enforce it. Teaches basic interrogation and search",
      bonus: "Unit gets +1 for search and interrogation rolls",
      time: 4,
    },
    {
      name: "Security Base Basic",
      description: "Teaches infantry base security",
      bonus: "Unit gets +1 on security duty",
      time: 4,
      children: [
        {
          name: "Security Base Advanced",
          description: " Teaches infantry advanced base security",
          bonus: "Gives unit a +2 on base security",
          time: 4,
        },
      ],
    },
    {
      name: "Security Ship Board (Navel)",
      description: "Teaches infantry basics in wet navy security",
      bonus: "Unit gets +1 on water or docks security",
      time: 4,
    },
    {
      name: "Security Ship Board (Space)",
      description: "Teaches infantry basic space security",
      bonus: "Unit gets +1 to security in space",
      time: 6,
      children: [
        {
          name: "Security Ship Board (Space Station)",
          description: "Teaches infantry advanced space station security",
          bonus: "Unit gets +2 on security for space stations",
          time: 8,
        },
        {
          name: "Security Ship Board (DropShip)",
          description: "Teaches infantry advanced Dropship security",
          bonus: "Unit gets +2 on security for Dropships",
          time: 12,
        },
        {
          name: "Security Ship Board (JumpShip)",
          description: "Teaches infantry advanced Jumpship security",
          bonus: "Unit gets +2 on security for Jumpships",
          time: 12,
        },
      ],
    },
    {
      name: "Naval Assault (Water)",
      description: "Teaches unit how to assault craft on water",
      bonus: "Unit gets +1 on attack rolls on board a water vessel",
      time: 8,
    },
    {
      name: "Naval Assault (Space)",
      description: "Teaches unit how to assault in a ZeroG environment",
      bonus: "Unit gets +1 on attack rolls in ZeroG",
      time: 8,
      children: [
        {
          name: "Naval Assault (DropShip)",
          description:
            "Teaches unit how to assault a Dropship in a ZeroG environment",
          bonus: "Unit gets +1 on attack rolls in ZeroG on a Dropship",
          time: 12,
        },
        {
          name: "Naval Assault (JumpShip)",
          description:
            "Teaches unit how to assault Jumpships in a ZeroG environment",
          bonus: "Unit gets +1 on attack rolls in ZeroG on a Jumpship",
          time: 12,
        },
      ],
    },
    {
      name: "Heavy Weapons",
      description: "Teaches standard rifle infantry how to use heavy weapons",
      bonus: "Heavy weapons are enough",
      time: 4,
      children: [
        {
          name: "Heavy Weapons Advanced",
          description:
            "Teaches heavy infantry how to move and shoot with heavy weapons",
          bonus: "Unit can now move and shoot in the same turn",
          time: 4,
        },
      ],
    },
    {
      name: "Sapper",
      description: "Teaches basic infantry to be combat engineers",
      bonus: "Sapping is enough",
      time: 8,
      children: [
        {
          name: "Sapper Advanced",
          description: "Teaches advanced combat engineering",
          bonus: "Unit gets +1 to skill level",
        },
      ],
    },
    {
      name: "Combat Medic",
      description: "Teaches basic infantry to be combat medics",
      bonus: "Unit gets +1 on first aid rolls",
      time: 4,
      children: [
        {
          name: "Search and Rescue (SAR)",
          description:
            "Teaches VTOL crew how to look for and rescue downed crews",
          bonus: "Unit gets +1 on search and first aid rolls",
          time: 12,
          children: [
            {
              name: "Para-Jumper",
              description:
                "Teaches SAR team how to rescue downed crews behind enemy lines",
              bonus:
                "Unit gets +1 to skill level. Unit gets +2 to search and first aid rolls",
              time: 12,
            },
          ],
        },
      ],
    },
    {
      name: "Forward Air Controller",
      description: "Teaches infantry how to call in air strikes",
      bonus: "What more could you want?",
      time: 4,
      children: [
        {
          name: "Forward Air Controller Advanced",
          description:
            "Teaches FACs how to call in airstrikes, indirect fire and artillery strikes",
          bonus: "Unit gets +1 to skill level",
          time: 8,
        },
      ],
    },
    {
      name: "Arctic Combat",
      description: "Teaches unit basic Arctic combat skills",
      bonus: "Unit gets +1 in Arctic Combat",
      time: 4,
    },
    {
      name: "Desert Combat",
      description: "Teaches unit basic Desert combat skills",
      bonus: "Unit gets +1 in Desert Combat",
      time: 4,
    },
    {
      name: "Jungle Combat",
      description: "Teaches unit basic Jungle combat skills",
      bonus: "Unit gets +1 in Jungle Combat",
      time: 4,
    },
    {
      name: "Mountain Combat",
      description: "Teaches unit basic Mountain combat skills",
      bonus: "Unit gets +1 in Mountain Combat",
      time: 4,
    },
    {
      name: "Urban Combat",
      description: "Teaches unit basic Urban combat skills",
      bonus: "Unit gets +1 in Urban Combat",
      time: 4,
    },
  ],
};

const Tooltip = ({ data }: { data: ITrainingData }) => {
  return (
    <Card
      sx={{
        position: "absolute",
        top: 86,
        left: 24,
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{data.name}</Typography>
          <Typography>{data.time} weeks</Typography>
        </Box>
        <Typography>{data.description}</Typography>
        <Typography>{data.bonus}</Typography>
      </CardContent>
    </Card>
  );
};

const Page = () => {
  const [tooltip, setTooltip] = useState<ReactNode | undefined>(undefined);
  return (
    <Framework>
      <Box sx={{ height: "800px" }}>
        <ResponsiveTree
          nodeColor={{ scheme: "tableau10" }}
          theme={theme}
          fixNodeColorAtDepth={1}
          data={trainingData}
          identity={"name"}
          mode={"tree"}
          linkThickness={1}
          nodeSize={12}
          activeLinkThickness={2}
          activeNodeSize={24}
          inactiveLinkThickness={1}
          inactiveNodeSize={12}
          labelsPosition={"layout-opposite"}
          orientLabel={false}
          layout={"left-to-right"}
          onLinkMouseEnter={() => {}}
          onLinkMouseMove={() => {}}
          onLinkMouseLeave={() => {}}
          onLinkClick={() => {}}
          onNodeMouseMove={(node: { data: ITrainingData }) => {
            const data = node.data;
            setTooltip(Tooltip({ data }));
          }}
          onNodeMouseLeave={() => setTooltip(undefined)}
          linkTooltip={() => <></>}
          linkTooltipAnchor={"center"}
          margin={{ top: 24, right: 24, bottom: 24, left: 24 }}
        />
        {tooltip}
      </Box>
      <Typography>Notes:</Typography>
      <Typography>
        Most training is really for infantry. Taking it otherwise could help,
        but might be harder to utilize the benefit from them
      </Typography>
      <Typography>
        Everything gives a bonus, no training gives a penalty. Numbers will be +
        or - based on the convention of the roll impacted. So attack rolls will
        see -1 while a perception roll will see a +1.
      </Typography>
    </Framework>
  );
};

export default Page;
