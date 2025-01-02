import React from "react";
import { eDetailType, IDetail, IDetails } from "./IDetails";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { getTokenOfPerson } from "./data/groups/utilities";
import { PersonAvatar } from "./PersonAvatar";

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
    return (
      <Typography sx={{ paddingBottom: 1 }}>
        {detail === "" ? <>&nbsp;</> : detail}
      </Typography>
    );
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
      const token = getTokenOfPerson(detail.speaker);
      return (
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            paddingBottom: 1,
          }}
        >
          {token && <PersonAvatar personName={detail.speaker} />}
          {!token && (
            <>
              <Typography sx={{ fontWeight: "bold" }} component={"span"}>
                {detail.speaker}:
              </Typography>
            </>
          )}
          {detail.text}
        </Typography>
      );
    case eDetailType.Text:
      return <Typography>{detail.text}</Typography>;
  }
};
