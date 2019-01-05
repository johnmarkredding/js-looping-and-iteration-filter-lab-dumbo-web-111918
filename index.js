// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (elm) {
    return (elm.toLowerCase() === string.toLowerCase())
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (elm) {
    return (elm.toLowerCase() === string.toLowerCase())
  });
}