import React from "react";
import { IPerson } from "./IGroup";
import { Card, CardContent, Typography } from "@mui/material";

interface IPersonCardProps {
  person: IPerson;
}
export const PersonCard: React.FC<IPersonCardProps> = ({ person }) => {
  return (
    <Card>
      <CardContent>
        <Typography>{person.name}</Typography>
      </CardContent>
    </Card>
  );
};
