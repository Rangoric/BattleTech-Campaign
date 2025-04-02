import { RuleBookFramework } from "@/rule-book/RuleBookFramework";
import { Box, Typography } from "@mui/material";

const VTOLPage = () => {
  return (
    <RuleBookFramework>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          VTOL Rules
        </Typography>
      </Box>
    </RuleBookFramework>
  );
};

export default VTOLPage;
