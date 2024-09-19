import { Framework } from "@/layout/Framework";
import { Groups } from "@/nejiro/groups";
import { NejiroHeader } from "@/nejiro/NejiroHeader";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Framework>
      <Box>
        <NejiroHeader activeLabel="Groups" />
        <Box>
          <Groups />
        </Box>
      </Box>
    </Framework>
  );
};

export default Page;
