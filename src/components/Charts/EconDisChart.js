import React from "react";
import { ResponsivePie } from "@nivo/pie";
// import School from "../../School";

/**
 * Main class component
 * @param {*} props
 */
function EconDisChart(props) {

    const yearToSchoolArrayDataMap = props.yearToSchoolArrayDataMap;
    const dataYears = Object.keys(yearToSchoolArrayDataMap);
    let allYearPieCharts = [];

    dataYears.forEach(year => {
        const thisYearSchoolDataArray = getEconDisForSchool(yearToSchoolArrayDataMap[year]);
        let thisYearPieCharts = getPieCharts(thisYearSchoolDataArray);

        allYearPieCharts.push(
            <div key={year} style={styles.yearChartsParent}>
                <span>{year}</span>
                {thisYearPieCharts}
            </div>
        )
    });



    // const schoolDataArray = getEconDisForSchool(
    //     props.schoolData,
    //     props.options
    // );
    //
    // let pieCharts = getPieCharts(schoolDataArray);

    return (
        <div id="econdis-pie-charts"
            style={styles.categoryChartsParent}
        >
            <h3 key="econdisHeading">Economically Disadvantaged</h3>
            {allYearPieCharts}
        </div>
    );
}

/**
 * return array: x->schoolName, male, female
 */
function getEconDisForSchool(schoolArrayForYear) {
    let chartData = [];
    schoolArrayForYear.forEach(schoolObject => {
        const schoolName = schoolObject._name;
        const disadvantagedCount = schoolObject._economicallyDisadvantaged;
        const totalCount = schoolObject._enrolled;
        const nonDisadvantagedCount = totalCount - disadvantagedCount;

        const disadvantagedPercentage = (
            (disadvantagedCount / totalCount) *
            100
        ).toFixed(2);
        const nonDisadvantagedPercentage = (
            (nonDisadvantagedCount / totalCount) *
            100
        ).toFixed(2);

        let thisSchoolData = {};
        let schoolDataArray = [
            {
                id: "Disadvantaged",
                value: disadvantagedCount,
                percentage: disadvantagedPercentage,
                color: "#222C49",
                label: "Economically Disadvantaged"
            },
            {
                id: "Others",
                value: nonDisadvantagedCount,
                percentage: nonDisadvantagedPercentage,
                color: "#FE8126",
                label: "Others"
            }
        ];
        thisSchoolData.schoolName = schoolName;
        thisSchoolData.dataArray = schoolDataArray;
        chartData.push(thisSchoolData);
    });

    return chartData;
}

// const pieChartParentDivStyle = {
//     height: "300px",
//     width: "25%",
//     minWidth: "250px",
//     flexGrow: "1",
//     display: "flex",
//     flexDirection: "column"
// };

const styles = {
    root: {
        fontFamily: "consolas, sans-serif",
        textAlign: "center",
        position: "relative",
        width: 250,
        height: 300
    },

    totalLabel: {
        fontSize: 24
    },
    categoryChartsParent: {
        display: "flex",
        flexDirection: "column",
        // height: "50%",
        width: "100%",
        borderBottomStyle: "solid",
        borderBottomWidth: "thin",
        borderBottomColor: "#707070",
        padding: "10px",
        backgroundColor: "#F1F1F1"
    },
    yearChartsParent: {
        display: "flex",
        flexDirection: "row"
    }
};

function getPieCharts(schoolDataArray) {
    let pieCharts = [];

    schoolDataArray.forEach((row) => {
        const schoolName = row.schoolName;
        const schoolData = row.dataArray;
        if (isNaN(schoolData[0].value)) {
            pieCharts.push(
                <div className="NoDataWrapper">
                    <div className="NoDataMessage">
                        <p>No Data Available</p>
                    </div>
                    <div style={{ flexGrow: "1" }}>{schoolName}</div>
                </div>
            )
        }
        else {
            pieCharts.push(
                <div key={schoolName} style={styles.root}>
                    <div style={{ height: "90%", flexGrow: "1" }}>
                        <ResponsivePie
                            key={schoolName}
                            colors={d => d.color}
                            isInteractive={true}
                            data={schoolData}
                            sortByValue={true}
                            enableSlicesLabels={true}
                            enableRadialLabels={false}
                            slicesLabelsTextColor="white"
                            margin={{ top: 40, right: 60, bottom: 40, left: 40 }}
                            innerRadius={0.5}
                            tooltip={data => {
                                return getTooltipHTML(data);
                            }}

                        />
                    </div>
                    <div style={{ flexGrow: "1" }}>{schoolName}</div>
                </div>
            );
        }
    });

    // if (pieCharts && pieCharts.length > 0) {
    //     const heading = [];
    //     heading.push(
    //         // <h3 key={"econdis-heading"}>Economically Disadvantaged</h3>
    //         <h3 key={"econdis-heading"}>EconDis</h3>
    //     );
    //     pieCharts = heading.concat(pieCharts);
    // }

    return pieCharts;
}

function getTooltipHTML(data) {
    return (
        <div
            style={{ display: "flex", flexDirection: "column", color: "black" }}
        >
            <div>
                {data.label}: {data.value}
            </div>
            <div>Percentage: {data.percentage}%</div>
        </div>
    );
}

export default EconDisChart;
