import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { RouterProvider } from "react-router-dom";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import Routers from "./layout/routes";

import ShipmentContextProvider from "./context/Shipment";
import { ConfigProvider } from "antd";

function App() {

  const { theme } = useContext(ThemeContext);
  const cacheRtl = createCache({
    key: "muirtl",

    stylisPlugins: [prefixer, stylisRTLPlugin],
  });

  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ConfigProvider direction={theme.direction}>
          <ThemeProvider theme={theme}>
            <ShipmentContextProvider>
              <RouterProvider router={Routers()} />
            </ShipmentContextProvider>
          </ThemeProvider>
        </ConfigProvider>
      </CacheProvider>
    </>
  );
}

export default App;
