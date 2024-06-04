import { useContext } from "react";
import DataTable from "../components/Table";
import { ShipmentContext } from "../context/Shipment";
import { Col, Row } from "antd";
import StepperOrder from "../components/StepperOrder";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { Shipment, ShipmentError } = useContext(ShipmentContext);
  const { t } = useTranslation();
  const content = t("home");
  return (
    <>
      {!Shipment && (
        <>
          <Row justify="center" align="middle">
            <Col xs={24} sm={22} md={20} lg={18} xl={16}>
              <div style={{ textAlign: "center" }}>{content}</div>
            </Col>
          </Row>
        </>
      )}
      {!ShipmentError && Shipment && (
        <Row justify="center" align="middle" style={{ marginBottom: "1rem" }}>
          <Col xs={24} sm={22} md={20} lg={18} xl={16}>
            <div>
              <StepperOrder />           
            </div>
          </Col>
        </Row>
      )}

      {!ShipmentError && Shipment && (
        <Row justify="center" align="middle">
          <Col xs={24} sm={22} md={20} lg={18} xl={16}>
            <div>
              <DataTable data={Shipment} />
            </div>
          </Col>
        </Row>
      )}
    </>
  );
}
