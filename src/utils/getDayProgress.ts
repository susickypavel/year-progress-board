export function getDayProgress() {
  const currentDate = new Date();

  console.log(currentDate.getHours());

  return Math.floor((currentDate.getUTCHours() / 24) * 100);
}
