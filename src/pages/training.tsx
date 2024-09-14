import { Framework } from "@/layout/Framework";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

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
const trainingData = {
  name: "Infantry Training",
  children: [
    {
      name: "Basic Survival",
      children: [
        {
          name: "Advanced Survival",
        },
      ],
    },
    {
      name: "Advanced Infantry Tactics",
      children: [
        {
          name: "Scout Sniper Basic",
          children: [{ name: "Scout Sniper Advanced" }],
        },
      ],
    },
    {
      name: "Security Military Police",
    },
    {
      name: "Security Base Basic",
      children: [
        {
          name: "Security Base Advanced",
        },
      ],
    },
    {
      name: "Security Ship Board (Navel)",
    },
    {
      name: "Security Ship Board (Space)",
      children: [
        {
          name: "Security Ship Board (Space Station)",
        },
        {
          name: "Security Ship Board (DropShip)",
        },
        {
          name: "Security Ship Board (JumpShip)",
        },
      ],
    },
    {
      name: "Naval Assault (Water)",
    },
    {
      name: "Navel Assault (Space)",
      children: [
        {
          name: "Naval Assault (DropShip)",
        },
        {
          name: "Naval Assault (JumpShip)",
        },
      ],
    },
    {
      name: "Heavy Weapons",
      children: [
        {
          name: "Heavy Weapons Advanced",
        },
      ],
    },
    {
      name: "Sapper",
      children: [
        {
          name: "Sapper Advanced",
        },
      ],
    },
    {
      name: "Combat Medic",
      children: [
        {
          name: "Search and Rescue (SAR)",
          children: [
            {
              name: "Para-Jumper",
            },
          ],
        },
      ],
    },
    {
      name: "Forward Air Controller",
      children: [
        {
          name: "Forward Air Controller Advanced",
        },
      ],
    },
    {
      name: "Arctic Combat",
    },
    {
      name: "Desert Combat",
    },
    {
      name: "Jungle Combat",
    },
    {
      name: "Mountain Combat",
    },
    {
      name: "Urban Combat",
    },
  ],
};

const Page = () => {
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
          labelsPosition={"outward"}
          orientLabel={false}
          layout={"left-to-right"}
          onLinkMouseEnter={() => {
            throw new Error("Function not implemented.");
          }}
          onLinkMouseMove={() => {
            throw new Error("Function not implemented.");
          }}
          onLinkMouseLeave={() => {
            throw new Error("Function not implemented.");
          }}
          onLinkClick={() => {
            throw new Error("Function not implemented.");
          }}
          linkTooltip={() => <></>}
          linkTooltipAnchor={"center"}
          margin={{ top: 24, right: 160, bottom: 24, left: 120 }}
        />
      </Box>
    </Framework>
  );
};

export default Page;
