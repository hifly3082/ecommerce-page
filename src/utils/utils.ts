export function addEndingToNumber(number: number) {
  if (number % 100 === 11 || number % 100 === 12 || number % 100 === 13) {
    return ' штук'
  } else if (number % 10 === 1) {
    return ' штука'
  } else if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) {
    return ' штуки'
  } else {
    return ' штук'
  }
}
