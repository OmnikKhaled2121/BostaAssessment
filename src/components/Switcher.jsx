import { useTheme } from "@emotion/react";
import { Box, Grid, MenuItem, Select } from "@mui/material";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";

export default function Switcher({ xs }) {
  const theme = useTheme();

  const { setThemeLang } = useContext(ThemeContext);

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language == "en" ? "ar" : "en");
    setThemeLang(i18n.dir());
  };

  const { i18n } = useTranslation();

  useEffect(() => {
    setThemeLang(i18n.dir());
  }, [i18n, i18n.language]);



  // const { i18n } = useTranslation();

  const getOppositeLanguage = () => {
    return i18n.language === "ar" ? "English" : "العربية";
  };

  return (
    <span
      style={{ color: "red", cursor: "pointer" }} // Text color red and cursor pointer
      onClick={changeLanguage}
    >
      {getOppositeLanguage()}
    </span>
  );
}
