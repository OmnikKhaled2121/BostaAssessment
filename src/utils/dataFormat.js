import { dataFormat } from "./dateFormat";

export function createDataSource(dataSource, shipmentDetails,lang) {
    let formattedDS = [];
    console.log("shipmentDetails", shipmentDetails);

    if (dataSource && dataSource.length > 0) {
        formattedDS = dataSource.map((item, index) => {
            console.log("shipmentDetails[item.state]", shipmentDetails[item.state]);
            return {
                key: index,
                branch: item.hub ? item.hub : "",
                date: dataFormat(item.timestamp,lang)[0],
                time: dataFormat(item.timestamp,lang)[1],
                details: shipmentDetails.tableEvents[item.state],
                reason: item.reason ? shipmentDetails.reasons[item.reason] : "",
            };
        });

        return formattedDS;
    }
    return [];
}