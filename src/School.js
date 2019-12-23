import { EntityType } from "./Constants";

class School {
    constructor() {
        this._male = 0;
        this._female = 0;
        this._ethnicity = [];
        this._ethnicityMap = {};
        this._districtName = "";
        this._type = 0;
        this._name = "";
        this._economicallyDisadvantaged = 0;
        this._enrolled = 0;
        this._testTakers = 0;
        this._studentsWithDisability = 0;
        this._schoolYear = 2016;
    }

    setType(entityType) {
        if (entityType === EntityType.SCHOOL || EntityType.DISTRICT) {
            this._type = entityType;
        } else {
            this._type = EntityType.SCHOOL;
            console.log("error setting entity");
        }
    }

    setMale(maleCount) {
        // add error check
        this._male = maleCount;
    }

    setFemale(femaleCount) {
        // add error check
        this._female = femaleCount;
    }

    setEthnicity(ethnicityObj) {
        // add error check
        this._ethnicity = ethnicityObj;
    }

    setEthnicityMap(ethnicityMap) {
        // add error check
        this._ethnicityMap = ethnicityMap;
    }

    setDistrictName(districtName) {
        // add error check
        this._districtName = districtName;
    }

    setName(name) {
        this._name = name;
    }

    setEconomicallyDisadvantaged(count) {
        this._economicallyDisadvantaged = count;
    }

    setEnrolled(count) {
        this._enrolled = count;
    }

    setTestTakers(count) {
        this._testTakers = count;
    }

    setStudentsWithDisability(count) {
        this._studentsWithDisability = count;
    }

    setSchoolYear(year) {
        this._schoolYear = year;
    }
}

export default School;
