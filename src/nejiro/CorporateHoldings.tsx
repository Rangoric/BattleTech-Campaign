import { Box, Card, CardContent, Typography } from "@mui/material";
import { ICorporateHoldings } from "./IGroup";
import React from "react";

interface ICorporateHoldingProps {
  holdings: ICorporateHoldings[];
}

export const CorporateHoldings: React.FC<ICorporateHoldingProps> = ({
  holdings,
}) => {
  return holdings.map((holding, index) => (
    <>
      <Typography key={index} variant={"h6"}>
        Corporate Holdings of {holding.name}
      </Typography>
      {holding.description?.map((item) => (
        <Typography key={item}>{item}</Typography>
      ))}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {holding.holdings?.map((item) => (
          <React.Fragment key={item.name}>
            <Card elevation={3} sx={{ width: "100%" }}>
              <CardContent>
                <Typography>{item.name}</Typography>
                {item.description?.map((item) => (
                  <Typography key={item}>{item}</Typography>
                ))}
              </CardContent>
            </Card>
          </React.Fragment>
        ))}
      </Box>
    </>
  ));
};
