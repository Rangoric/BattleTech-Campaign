import { Framework } from "@/layout/Framework";
import { People } from "@/nejiro/people";
import { NejiroHeader } from "@/nejiro/NejiroHeader";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Framework>
      <Box>
        <NejiroHeader activeLabel="People" />
        <Box>
          <People />
        </Box>
      </Box>
    </Framework>
  );
};

export default Page;
