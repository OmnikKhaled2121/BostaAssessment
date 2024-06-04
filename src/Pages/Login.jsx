import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const content = t("Navbar.login");
  return (
    <>
      <Row justify="center" align="middle">
        <Col xs={24} sm={22} md={20} lg={18} xl={16}>
          <div style={{ textAlign: "center" }}>{content}</div>
        </Col>
      </Row>
    </>
  );
}
