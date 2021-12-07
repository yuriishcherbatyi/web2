module.exports.InsertStringInto = function (str, index, value) {
  if (index > str.length) return 'Incorrect data!'
  else return str.substr(0, index) + value + str.substr(index);
}