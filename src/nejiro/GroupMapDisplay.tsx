import { ClientUrls } from "@/utilities/ClientUrls";
import { Box } from "@mui/material";
import React from "react";

interface IGroupMapDisplayProps {
  data: {
    mapName: string;
    up: number;
    right: number;
  };
}

export const GroupMapDisplay: React.FC<IGroupMapDisplayProps> = ({
  data: { mapName, up, right },
}) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(" + ClientUrls.images(mapName) + ")",
          backgroundSize: "1000px",
          width: "360px",
          height: "240px",
          backgroundPositionX: `${right}px`,
          backgroundPositionY: `${up}px`,
        }}
      />
    </>
  );
};
