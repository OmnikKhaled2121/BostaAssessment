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
function App() {
  // const { theme } = useContext(ThemeContext);

  const { theme } = useContext(ThemeContext);
  const cacheRtl = createCache({
    key: "muirtl",

    stylisPlugins: [prefixer, stylisRTLPlugin],
  });

  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={Routers()} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
