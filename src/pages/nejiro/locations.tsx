import { Framework } from "@/layout/Framework";
import { Locations } from "@/nejiro/locations";
import { NejiroTabs } from "@/nejiro/Tabs";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Framework>
      <Box>
        <NejiroTabs activeLabel="Locations" />
        <Box>
          <Locations />
        </Box>
      </Box>
    </Framework>
  );
};

export default Page;
