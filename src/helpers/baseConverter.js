function baseConverter(number, from, to, bit = number.length) {
  if (!number) return signExtension(number, bit)
  return signExtension(parseInt(number, from).toString(to), bit)
}

function signExtension(number, bit) {
  if (number.length >= bit) return number
  number = '0' + number
  return signExtension(number, bit)
}

export default baseConverter
