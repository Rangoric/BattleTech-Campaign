import { RuleBookFramework } from "@/rule-book/RuleBookFramework";
import { Box, Typography } from "@mui/material";

const EquipmentPage = () => {
  return (
    <RuleBookFramework>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Equipment Rules
        </Typography>
      </Box>
    </RuleBookFramework>
  );
};

export default EquipmentPage;
