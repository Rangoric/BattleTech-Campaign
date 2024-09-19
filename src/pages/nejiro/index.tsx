import { Framework } from "@/layout/Framework";
import { NejiroHeader } from "@/nejiro/NejiroHeader";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const Maps = dynamic(() => import("@/nejiro/maps").then((t) => t.Maps), {
  ssr: false,
});

const Page = () => {
  return (
    <Framework>
      <Box>
        <NejiroHeader />
        <Box>
          <Maps />
        </Box>
      </Box>
    </Framework>
  );
};

export default Page;
