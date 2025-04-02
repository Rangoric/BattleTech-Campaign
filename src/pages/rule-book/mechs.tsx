import { RuleBookFramework } from "@/rule-book/RuleBookFramework";
import { Box, Typography } from "@mui/material";

const MechsPage = () => {
  return (
    <RuleBookFramework>
      <Box className="flex flex-col items-center justify-center h-screen">
        <Typography variant="h4" component="h1" gutterBottom>
          Mech Rules
        </Typography>
      </Box>
    </RuleBookFramework>
  );
};

export default MechsPage;
