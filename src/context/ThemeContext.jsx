import { createTheme } from "@mui/material/styles";
import  { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export const ThemeContext = createContext({});

export default function ThemeContextProvider(props) {
  const { i18n } = useTranslation();
  const [themeLang, setThemeLang] = useState(i18n.dir());

  const theme = createTheme({
    direction: themeLang,
    typography: {
      fontFamily: "Cairo",
    },
  });

  return (
    <ThemeContext.Provider value={{ theme, setThemeLang }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
