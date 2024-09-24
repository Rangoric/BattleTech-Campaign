import React from "react";
import { ITerritorialHolding } from "./IGroup";
import { Box, Card, CardContent, Typography } from "@mui/material";
interface ITerritorialHoldingProps {
  holdings: ITerritorialHolding[];
}

export const TerritorialHoldings: React.FC<ITerritorialHoldingProps> = ({
  holdings,
}) => {
  return (
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
      {holdings.map((holding, index) => (
        <TerritorialHoldingDisplay key={index} {...holding} />
      ))}
    </Box>
  );
};

const TerritorialHoldingDisplay: React.FC<ITerritorialHolding> = ({
  name,
  size,
  location,
  description,
}) => {
  return (
    <Card elevation={3} sx={{ width: 320 }}>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>Size: {size}</Typography>
        <Typography>Location: {location}</Typography>
        {description?.map((item) => <Typography key={item}>{item}</Typography>)}
      </CardContent>
    </Card>
  );
};
