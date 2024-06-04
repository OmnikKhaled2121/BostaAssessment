import { createContext, useState, useEffect } from "react";

export const ShipmentContext = createContext({});

export default function ShipmentContextProvider(props) {
  const [ShipmentID, setShipmentID] = useState(null);
  const [Shipment, setShipment] = useState();
  const [ShipmentError, setShipmentError] = useState(null);

  async function getShipmentData(ShipmentID) {
    try {
      if (![null, "", " "].includes(ShipmentID)) {
        const response = await fetch(
          `https://tracking.bosta.co/shipments/track/${ShipmentID}`
        );
        if (!response.ok) {
          const error = {
            status: response.status,
            message:
              response.status === 404 ? "invaild id" : response.statusText,
          };
          throw error;
        }
        const data = await response.json();
        setShipment(data);
      }
      setShipmentError("");
    } catch (error) {
      setShipmentError(error);
    }
  }
  useEffect(() => {
    getShipmentData(ShipmentID);
  }, [ShipmentID]);

  return (
    <ShipmentContext.Provider
      value={{ ShipmentError, Shipment, ShipmentID, setShipmentID }}
    >
      {props.children}
    </ShipmentContext.Provider>
  );
}
