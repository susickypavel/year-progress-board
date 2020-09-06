// TODO: Needs testing, was finished pretty quickly

function isLeapYear(year: number): boolean {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function getDayNumber(currentDate: Date): number {
  const yearStart = new Date(currentDate.getFullYear(), 0, 1).getTime();

  const ms = currentDate.getTime() - yearStart;

  return ms / (1000 * 60 * 60 * 24);
}

export function getYearProgress(): number {
  const currentDate = new Date();
  const dayNumber = getDayNumber(currentDate);

  const isLeap = isLeapYear(currentDate.getFullYear());

  return Math.floor((dayNumber / (isLeap ? 366 : 365)) * 100);
}
