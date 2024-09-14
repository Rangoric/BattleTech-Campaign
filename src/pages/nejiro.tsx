import { Framework } from "@/layout/Framework";
import { Typography } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import nejiroMap from "../../public/images/map-of-nejiro.png";

const Page = () => {
  return (
    <Framework>
      <Typography variant={"h2"}>Nejiro</Typography>
      <ExportedImage
        src={nejiroMap}
        alt="Map of Nejiro"
        width={640}
        height={480}
      />
    </Framework>
  );
};

export default Page;
