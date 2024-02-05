export function getRange(initialNumber, lastNumber) {
  const length = lastNumber - initialNumber
  return Array.from({ length }).map((_, index) => index + initialNumber)
}
