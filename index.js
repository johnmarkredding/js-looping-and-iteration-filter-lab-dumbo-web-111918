// Code your solution in this file
function findMatching(string, drivers) {
  return drivers.filter(elm, function (elm, string) {
    return (elm.toLowerCase() === string.toLowerCase())
  });
}