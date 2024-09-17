import { Framework } from "@/layout/Framework";
import { Events } from "@/nejiro/events";
import { NejiroTabs } from "@/nejiro/Tabs";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Framework>
      <Box>
        <NejiroTabs activeLabel="Events" />
        <Box>
          <Events />
        </Box>
      </Box>
    </Framework>
  );
};

export default Page;
