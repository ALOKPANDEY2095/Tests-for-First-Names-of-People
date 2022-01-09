const getPeopleName = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");
const getPeopleInCity = (getPeopleName) => {
  return getFirstNames(getPeopleName);
};
module.exports = getPeopleInCity;
