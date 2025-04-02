import { RuleBookFramework } from "@/rule-book/RuleBookFramework";
import { Box, Typography } from "@mui/material";

const WeaponsPage = () => {
  return (
    <RuleBookFramework>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Weapons Rules
        </Typography>
      </Box>
    </RuleBookFramework>
  );
};

export default WeaponsPage;
