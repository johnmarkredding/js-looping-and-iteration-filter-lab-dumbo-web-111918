// Code your solution in this file
function findMatching(drivers, string) {
  drivers.filter(elm, function (elm, string) {return elm.toLowerCase() === string.toLowerCase()})
}