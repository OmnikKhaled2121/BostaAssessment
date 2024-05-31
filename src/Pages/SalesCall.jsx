import { Box, Container, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function SalesCall() {
  const { t } = useTranslation();
  const content = t("Navbar.sales");
  return (
    <Grid>
      <Container
        sx={{
          width: "100%",
          justifyContent: "center",
          justifyItems: "center",
          "& > div:not(:last-child)": {
            marginBottom: "4rem",
          },
        }}
      >
        <Box sx={{ textAlign: "Center" }}>{content}</Box>
      </Container>
    </Grid>
  );
}
