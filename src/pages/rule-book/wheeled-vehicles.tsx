import { RuleBookFramework } from "@/rule-book/RuleBookFramework";
import { Box, Typography } from "@mui/material";

const WheeledVehiclesPage = () => {
  return (
    <RuleBookFramework>
      <Box className="flex flex-col items-center justify-center h-screen">
        <Typography variant="h4" component="h1" gutterBottom>
          Wheeled Vehicle Rules
        </Typography>
      </Box>
    </RuleBookFramework>
  );
};

export default WheeledVehiclesPage;
