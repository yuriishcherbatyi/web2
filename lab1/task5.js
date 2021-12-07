module.exports.DaysFromStart = function (str1, str2) {
  var result = (Math.floor((Date.parse(str2) - Date.parse(str1)) / 86400000)) + 1;
  return result;
}


