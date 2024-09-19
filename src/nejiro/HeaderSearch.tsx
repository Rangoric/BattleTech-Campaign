import { TextField } from "@mui/material";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const HeaderSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <TextField
      id={"search"}
      name={"search"}
      label={"Search"}
      variant={"standard"}
      value={searchParams.get("search") || ""}
      onChange={(value) => handleSearch(value.target.value)}
    />
  );
};
