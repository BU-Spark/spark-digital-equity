import React from "react";


function Legends(props) {
    console.log('legends recieved school data');
    console.log(props.chartData);

    const chartDataArray = props.chartData;
    let legendMap = {};

    chartDataArray.forEach(entry => {
        legendMap[entry.id] = {
            id: entry.id,
            label: entry.label,
            color: entry.color
        };
    });

    console.log("legendMap");
    console.log(legendMap);

    const uniqueIds = Object.keys(legendMap);
    let legendsDiv = [];
    uniqueIds.forEach(legendId => {
        const legendEntry = legendMap[legendId];
        let legendRow = (
            <div key={legendEntry.id} style={{display: "flex", flexDirection: "row"}}>
                <div className={"legend-color"}
                     style={{
                         backgroundColor: legendEntry.color,
                         width: "20px",
                         margin: "5px",
                     }}>
                </div>
                <div className={"legend-text"}>{legendEntry.label}</div>
            </div>
        );

        legendsDiv.push(legendRow);
    });

    console.log("legendsDiv");
    console.log(legendsDiv);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "13px"
        }}>
            {legendsDiv}
        </div>
    );
}

export default Legends;
