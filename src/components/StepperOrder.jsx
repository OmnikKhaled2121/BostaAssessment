import {
  CarOutlined,
  CheckCircleTwoTone,
  ContainerTwoTone,
} from "@ant-design/icons";
import { Col, Row, Steps } from "antd";
import { useContext } from "react";
import { Divider } from "antd";
import { ShipmentContext } from "../context/Shipment";
import { useTranslation } from "react-i18next";
import  styles from '../styles/custom.module.css';
import { dataFormat } from "../utils/dateFormat";
import { ThemeContext } from "./../context/ThemeContext";

export default function StepperOrder() {

  let data2 = useContext(ShipmentContext);
  const { Step } = Steps;
  const { t } = useTranslation();
  const shipmentDetails = t("shipmentDetails");

  const { TransitEvents, CurrentStatus } = data2.Shipment;
  const currentState = CurrentStatus?.state;
  const currentIndex = stateToIndex(currentState, TransitEvents);

  let start = Math.max(0, currentIndex - 2);
  let end = start + 4;


  if (end > TransitEvents.length) {
    end = TransitEvents.length;
    start = Math.max(0, end - 4);
  }

  const limitedEvents = TransitEvents.slice(start, end);

  const statusClass = getStatusClass(currentState);

  return (
    <div
      style={{
        border: "2px solid #E8E8E8",
        borderRadius: "10px",
        padding: "2rem",
      }}
    >
      <OrderDetails data={data2} shipmentDetails={shipmentDetails} />
      <Divider /> 
      <div className={statusClass}>
        <Steps
          labelPlacement="vertical"
          className="custom-steps"
          current={limitedEvents.findIndex(
            (event) => event.state === currentState
          )}
        >
          {limitedEvents.map((event, index) => (
            <Step
              key={index}
              title={shipmentDetails.tableEvents[event.state]}
              description={new Date(event.timestamp).toLocaleString()}
              icon={getStepIcon(
                event,
                currentIndex,
                start + index,
                TransitEvents
              )}
            />
          ))}
        </Steps>
      </div>
    </div>
  );
}

function OrderDetails({ data, shipmentDetails }) {
  const { theme } = useContext(ThemeContext);
  return (
      <Row gutter={[16, 16]}>
          <Col className="gutter-row" xs={24} sm={12} md={6}>
              <div className={styles.colStyling}>
                  <span className={styles.orderDetails}> {shipmentDetails.shipmentID} {data?.ShipmentID}</span>
                  <span className={styles.orderValues}> {shipmentDetails.tableEvents[data?.Shipment?.CurrentStatus?.state]} </span>
              </div>
          </Col>

          <Col className="gutter-row" xs={24} sm={12} md={6}>
              <div className={styles.colStyling}>
                  <span className={styles.orderDetails}> {shipmentDetails.lastUpdate}</span>
                  <span className={styles.orderValues}> {dataFormat(data?.Shipment?.CurrentStatus?.timestamp, theme.direction).join(" ")}</span>
              </div>
          </Col>

          <Col className="gutter-row" xs={24} sm={12} md={6}>
              <div className={styles.colStyling}>
                  <span className={styles.orderDetails}> {shipmentDetails.trader}</span>
                  <span className={styles.orderValues}> {shipmentDetails.Bosta} </span>
              </div>
          </Col>

          <Col className="gutter-row" xs={24} sm={12} md={6}>
              <div className={styles.colStyling}>
                  <span className={styles.orderDetails}> {shipmentDetails.deliverDate}</span>
                  <span className={styles.orderValues}> {dataFormat(data?.Shipment?.PromisedDate, theme.direction).join(" ")}  </span>
              </div>
          </Col>
      </Row>
  );
}


// Utils Functions
const stateToIndex = (state, events) => {
  return events?.findIndex((event) => event.state === state);
};

const getStatusClass = (currentStatus) => {
  switch (currentStatus) {
    case "CANCELLED":
      return "status-cancelled";
    case "DELIVERED":
    case "DELIVERED_TO_SENDER":
      return "status-delivered";
    case "WAITING_FOR_CUSTOMER_ACTION":
      return "status-waiting";
    default:
      return "status-other";
  }
};

const getStepIcon = (event, currentIndex, index, events) => {
  if (index < currentIndex) {
    return <CheckCircleTwoTone />;
  }
  if (index === currentIndex) {
    if (event.state === "DELIVERED" || event.state === "DELIVERED_TO_SENDER") {
      return <CheckCircleTwoTone />;
    }
    return (
      <CarOutlined
        style={{
          fontSize: "1.8rem",
          color: "white",
          backgroundColor: "red",
          border: "2px solid white",
          padding: "0.32rem",
          borderRadius: "50%",
        }}
      />
    );
  }
  return <ContainerTwoTone />;
};
