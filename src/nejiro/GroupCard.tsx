import React from "react";
import { IGroup } from "./IGroup";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export const GroupCard: React.FC<IGroup> = ({ name, description }) => {
  return (
    <Card raised sx={{ maxWidth: "sm" }}>
      <CardHeader title={name} />
      <CardContent>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  );
};
