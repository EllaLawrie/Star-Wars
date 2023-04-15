// export const truncateString = (str, num) => {
//   if (str.length > num) {
//     return str.slice(0, num) + '...'
//   } else {
//     return str
//   }
// }

export const truncate = (str, num) => {
  return str.length > num ? `${str.slice(0, num)} ...` : str
}
