import Navber from "./Navber";
import { Outlet } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Layout } from "antd";

export default function Root() {
  const theme = useTheme();
  return (
    <>
      <Navber />
      <Layout style={{ backgroundColor: "unset", direction: theme.direction }}>
        <Outlet />
      </Layout>
    </>
  );
}
