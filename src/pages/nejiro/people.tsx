import { Framework } from "@/layout/Framework";
import { People } from "@/nejiro/people";
import { NejiroTabs } from "@/nejiro/Tabs";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Framework>
      <Box>
        <NejiroTabs activeLabel="People" />
        <Box>
          <People />
        </Box>
      </Box>
    </Framework>
  );
};

export default Page;
