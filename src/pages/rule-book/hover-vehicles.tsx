import { RuleBookFramework } from "@/rule-book/RuleBookFramework";
import { Box, Typography } from "@mui/material";

const HoverVehiclesPage = () => {
  return (
    <RuleBookFramework>
      <Box className="flex flex-col items-center justify-center h-screen">
        <Typography variant="h4" component="h1" gutterBottom>
          Hover Vehicle Rules
        </Typography>
      </Box>
    </RuleBookFramework>
  );
};

export default HoverVehiclesPage;
