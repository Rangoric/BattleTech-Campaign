import { Framework } from "@/layout/Framework";
import { Locations } from "@/nejiro/locations";
import { NejiroHeader } from "@/nejiro/NejiroHeader";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Framework>
      <Box>
        <NejiroHeader activeLabel="Locations" />
        <Box>
          <Locations />
        </Box>
      </Box>
    </Framework>
  );
};

export default Page;
