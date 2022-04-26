import itb from 'int-to-binary'

function intToAny(number, to, { length, signed }) {
  const binaryNumber = signed
    ? itb.signed(number, length)
    : itb.unsigned(number, length)

  if (to === 2) {
    return binaryNumber
  } else {
    return parseInt(binaryNumber, 2).toString(to)
  }
}
export default intToAny
