import { Box } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { ImageOverlay, MapContainer } from "react-leaflet";
import { css } from "../../styled-system/css";
import { CRS } from "leaflet";

export const Maps = () => {
  return (
    <Box sx={{ width: "800px", height: "600px", position: "relative" }}>
      <MapContainer
        className={css({
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
        })}
        center={[100, 75]}
        zoom={2}
        crs={CRS.Simple}
      >
        <ImageOverlay
          url={"images/main-map-with-color.jpg"}
          bounds={[
            [0, 0],
            [200, 150],
          ]}
        />
        <ImageOverlay
          url={"images/Nejiro03.jpg"}
          bounds={[
            [355, 75 - 200],
            [505, 275 - 200],
          ]}
        />
        <ImageOverlay
          url={"images/Nejiro04.jpg"}
          bounds={[
            [205, -25 - 200],
            [355, 175 - 200],
          ]}
        />
        <ImageOverlay
          url={"images/Nejiro05.jpg"}
          bounds={[
            [-60, 150],
            [-60 + 200, 300],
          ]}
        />
        <ImageOverlay
          url={"images/Nejiro06.jpg"}
          bounds={[
            [205, 175 - 200],
            [355, 375 - 200],
          ]}
        />
      </MapContainer>
    </Box>
  );
};
