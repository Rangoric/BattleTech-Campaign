import { Framework } from "@/layout/Framework";
import { Groups } from "@/nejiro/groups";
import { NejiroTabs } from "@/nejiro/Tabs";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Framework>
      <Box>
        <NejiroTabs activeLabel="Groups" />
        <Box>
          <Groups />
        </Box>
      </Box>
    </Framework>
  );
};

export default Page;
