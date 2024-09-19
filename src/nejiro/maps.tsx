import { Box } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { ImageOverlay, MapContainer } from "react-leaflet";
import { css } from "../../styled-system/css";
import { CRS } from "leaflet";
import { ClientUrls } from "@/utilities/ClientUrls";

export const Maps = () => {
  return (
    <Box
      sx={{
        width: "calc(100vw - 48px)",
        height: "calc(100vh - 192px)",
        position: "relative",
      }}
    >
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
          url={ClientUrls.images("/main-map-with-color.jpg")}
          bounds={[
            [0, 0],
            [200, 150],
          ]}
        />
        <ImageOverlay
          url={ClientUrls.images("/Nejiro03.jpg")}
          bounds={[
            [350, 75 - 200],
            [500, 275 - 200],
          ]}
        />
        <ImageOverlay
          url={ClientUrls.images("/Nejiro04.jpg")}
          bounds={[
            [200, -25 - 200],
            [350, 175 - 200],
          ]}
        />
        <ImageOverlay
          url={ClientUrls.images("/Nejiro05.jpg")}
          bounds={[
            [-60, 150],
            [-60 + 200, 300],
          ]}
        />
        <ImageOverlay
          url={ClientUrls.images("/Nejiro06.jpg")}
          bounds={[
            [200, 175 - 200],
            [350, 375 - 200],
          ]}
        />
      </MapContainer>
    </Box>
  );
};
