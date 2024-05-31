import Navber from "./Navber";

import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Root() {
  const theme = useTheme();
  return (
    <>
      <Navber />
      <Grid
        sx={{
          minWidth: "100vw",
          minHeight: "100px",
          direction: `${theme.direction}`,
        }}
      >
        <Outlet />
      </Grid>
    </>
  );
}
