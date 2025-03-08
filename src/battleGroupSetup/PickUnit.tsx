import { AllUnitDesignations } from "@/recordSheets/database";
import { useAppSelector } from "@/recordSheets/store";
import { Box, Button } from "@mui/material";

interface IPickUnitProps {
  unavailableUnits: AllUnitDesignations[];
  onPickUnit: (unit: AllUnitDesignations) => void;
}

export const PickUnit: React.FC<IPickUnitProps> = ({ unavailableUnits, onPickUnit }) => {
  const database = useAppSelector((state) => state.database.units);
  const keys = Object.keys(database) as AllUnitDesignations[];
  return (
    <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={1}>
      {keys
        .filter((t) => !unavailableUnits.includes(t))
        .map((unit) => (
          <Button variant={"contained"} key={unit} onClick={() => onPickUnit(unit)}>
            {unit}
          </Button>
        ))}
    </Box>
  );
};
