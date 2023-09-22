export function convertDate(date) {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return `${month.toString().padStart(2, '0')}/${day
    .toString()
    .padStart(2, '0')}/${year}`;
}
