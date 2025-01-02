import React from "react";
import { eDetailType, IDetail, IDetails } from "./IDetails";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export interface IDetailsDisplayProps {
  details?: IDetails;
}
export interface IDetailDisplayProps {
  detail: IDetail;
}

export const DetailsDisplay: React.FC<IDetailsDisplayProps> = ({ details }) => {
  if (!details || details.length === 0) {
    return null;
  }

  return (
    <>
      {details.map((item, idx) => (
        <DetailDisplay key={idx} detail={item}></DetailDisplay>
      ))}
    </>
  );
};

export const DetailDisplay = ({ detail }: IDetailDisplayProps) => {
  if (typeof detail === "string") {
    return <Typography>{detail}</Typography>;
  }

  switch (detail.type) {
    case eDetailType.QuoteBlock:
      return (
        <Card variant={"outlined"}>
          <CardHeader title={detail.title} />
          <CardContent>
            <Typography sx={{ whiteSpace: "pre-line" }} variant={"overline"}>
              {detail.text}
            </Typography>
          </CardContent>
        </Card>
      );
    case eDetailType.Conversation:
      return (
        <Typography>
          <strong>{detail.speaker}</strong>: {detail.text}
        </Typography>
      );
    case eDetailType.Text:
      return <Typography>{detail.text}</Typography>;
  }
};
