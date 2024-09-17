import { Framework } from "@/layout/Framework";
import { NejiroTabs } from "@/nejiro/Tabs";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const Maps = dynamic(() => import("@/nejiro/maps").then((t) => t.Maps), {
  ssr: false,
});

const Page = () => {
  return (
    <Framework>
      <Box>
        <NejiroTabs activeLabel="Maps" />
        <Box>
          <Maps />
        </Box>
      </Box>
    </Framework>
  );
};

export default Page;
