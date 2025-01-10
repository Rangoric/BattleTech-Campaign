import { RecordSheets } from "@/recordSheets/RecordSheets";

const involvedUnits = [
  "INANNA",
  "ODIN",
  "SARASWARTI",
  "GERI",
  "NYYRIKKI",
  "AETHER",
  "GD(MG)",
  "GD(LRR)",
];

const Page = () => {
  return <RecordSheets units={involvedUnits} />;
};

export default Page;
