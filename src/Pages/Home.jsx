import { Box, Container, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import StepperComp from "../components/Stepper";
import DataTable from "../components/Table";

export default function Home() {
  const { t } = useTranslation();
  const content = t("Navbar.home");
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

        <StepperComp />
        <Grid
          container
          sx={{
            display: { xs: "none", md: "flex" },
            width: "100%",
            padding: "1rem 0",
            boxSizing: "border-box",
            background: "white",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12}>
            <DataTable />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
