export function calcDiffInTimeWith(date, format) {
  let dateStart = new Date(date);
  let dateNow = new Date();

  let diffInSeconds = Math.abs(dateStart - dateNow) / 1000;
  let years = Math.abs(dateStart.getFullYear() - dateNow.getFullYear());

  // +1 GTM (sweden).
  diffInSeconds += 3600;

  let hours = Math.floor(diffInSeconds / 60 / 60 % 24);
  let days = Math.floor(diffInSeconds / 60 / 60 / 24);

  if (format === 'hours') return hours;
  if (format === 'days') return days;
  if (format === 'years') return years;
}