// Code your solution in this file
function findMatching(drivers, string) {
  drivers.filter(e, function (e) {return e.toLowerCase() === string.toLowerCase()})
}