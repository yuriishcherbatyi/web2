module.exports.GenerateHexadecimalNumber = function (length) {
  let result = ''
  const numbers = '0123456789ABCDEF'
  for (let i = 0; i < length; i++) {
    result += numbers[Math.floor(Math.random() * 16)]
  }
  return result
}
