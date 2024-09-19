import { Framework } from "@/layout/Framework";
import { Events } from "@/nejiro/events";
import { NejiroHeader } from "@/nejiro/NejiroHeader";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Framework>
      <Box>
        <NejiroHeader activeLabel="Events" />
        <Box>
          <Events />
        </Box>
      </Box>
    </Framework>
  );
};

export default Page;
