import { Framework } from "@/layout/Framework";
import { Search } from "@/nejiro/search";
import { NejiroTabs } from "@/nejiro/Tabs";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Framework>
      <Box>
        <NejiroTabs />
        <Box>
          <Search />
        </Box>
      </Box>
    </Framework>
  );
};

export default Page;
