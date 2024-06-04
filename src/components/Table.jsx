import { useEffect, useState, useContext } from "react";
import { Table, Row, Col, Card, Button } from "antd";
import { ShipmentContext } from "../context/Shipment";
import { ThemeContext } from "../context/ThemeContext";
import questionMark from "../../public/preview.jpg";
import { useTranslation } from "react-i18next";
import { createDataSource } from "./../utils/dataFormat";

export default function DataTable() {
  let [data1, setData] = useState();
  const { Shipment } = useContext(ShipmentContext);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const shipmentDetails = t("shipmentDetails");

  useEffect(() => {
    setData(Shipment);
  }, [Shipment]);

  const columns = [
    {
      title: shipmentDetails.tableHeaders.branch,
      dataIndex: "branch",
      key: "Branch",
    },
    {
      title: shipmentDetails.tableHeaders.date,
      dataIndex: "date",
      key: "Date",
    },
    {
      title: shipmentDetails.tableHeaders.time,
      dataIndex: "time",
      key: "Time",
      render: (value) => {
        return <span style={{ direction: theme.direction }}>{value}</span>;
      },
    },
    {
      title: shipmentDetails.tableHeaders.details,
      dataIndex: "details",
      key: "Details",
      render: (text, record) => {
        console.log("text", text);
        console.log("record", record);
        let color = "";
        let reason = "";

        if (record.reason) {
          color = "#ef9b0f";
          reason = record.reason;
        }

        return (
          <span>
            {text}
            <br /> <span style={{ color }}> {reason && ` ${reason}`}</span>
          </span>
        );
      },
    },
  ];
  return (
    <>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{ direction: theme.direction }}
      >
        <Col xs={24} sm={22} md={18} lg={18} xl={18}>
          <div style={{ marginBottom: "1rem" }}>
            {shipmentDetails.shipmentDetails}
          </div>
          <div>
            <Table
              dataSource={createDataSource(
                data1?.TransitEvents,
                shipmentDetails,
                theme.direction
              )}
              columns={columns}
              pagination={{ pageSize: 5 }}
            />
          </div>
        </Col>
        <Col xs={24} sm={22} md={6} lg={6} xl={6}>
          <div style={{ marginBottom: "1rem" }}>
            {shipmentDetails.deliveryAddress}
          </div>
          <AdressCard />
        </Col>
      </Row>
    </>
  );
}

function AdressCard() {
  const { t } = useTranslation();
  const shipmentDetails = t("shipmentDetails");
  return (
    <>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{ marginBottom: "0.5rem" }}
      >
        <Col span={24}>
          <Card
            style={{
              width: "300px",
              backgroundColor: "#FAFAFA",
            }}
          >
            <p>{shipmentDetails.cardAddress}</p>
          </Card>
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        justify="center"
      >
        <Col span={24}>
          <Card style={{ width: "300px" }}>
            <Row>
              <Col span={8}>
                <img
                  src={questionMark}
                  style={{ width: "100%" }}
                  alt="Question Mark"
                />
              </Col>
              <Col span={16}>
                <Row style={{ textAlign: "center" }}>
                  <p>{shipmentDetails.cardTitle}</p>
                </Row>
                <Row justify={"center"}>
                  <Button
                    type="primary"
                    danger
                    style={{ fontWeight: "bold",  }}
                  >
                    {shipmentDetails.cardButton}
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
