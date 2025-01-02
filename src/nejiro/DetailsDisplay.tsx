import React from "react";
import { eDetailType, IDetail, IDetailConversation, IDetails } from "./IDetails";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
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
    if (detail.includes(":")) {
      const stringDetail: IDetailConversation = {
        type: eDetailType.Conversation,
        speaker: detail.split(":")[0],
        text: detail.split(":")[1],
      };
      return DetailDisplayByType(stringDetail);
    }
  }
  return DetailDisplayByType(detail);
};

const DetailDisplayByType = (detail: IDetail) => {
  if (typeof detail === "string") {
    return <Typography sx={{ paddingBottom: 1 }}>{detail === "" ? <>&nbsp;</> : detail}</Typography>;
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
        <Box
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
          <Typography>{detail.text}</Typography>
        </Box>
      );
    case eDetailType.Text:
      return <Typography>{detail.text}</Typography>;
  }
};
