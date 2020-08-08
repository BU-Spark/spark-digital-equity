import React from "react";
import SchoolDistrictFilter from "../Filters/SchoolDistrictFilter";
import PrimaryGraphsChoose from "../Filters/PrimaryGraphsChoose";
import YearFilter from "../Filters/YearFilter";
import '../Filters/Filters.css'

// defaultSchoolOptions =

function FilterPanel(props) {

    return (
        <div className="filter-container">
            <SchoolDistrictFilter
                data={props.data}
                onOptionsChange={(selectedOptions, actionMeta) =>
                    props.onSchoolFilterChange(
                        selectedOptions,
                        actionMeta
                    )
                }
                selectedSchoolArray={props.selectedSchoolArray}
            />
            <YearFilter
                selectedYears={props.selectedYears}
                onYearChange={newYearSelection =>
                    props.onYearSelectionChange(newYearSelection)
                }
            />
            <PrimaryGraphsChoose
                selectedFilters={props.selectedFilters}
                onSelectionChange={newSelection =>
                    props.onGraphSelectionChange(newSelection)
                }
            />
            {}
        </div>
    );
}

export default FilterPanel;
