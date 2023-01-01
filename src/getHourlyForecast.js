export default function getHourlyForecast(time, forecastArray, hours) {
  const currentHours = new Date(time).getHours();
  const currentDay = forecastArray[0].hour;
  const nextDay = forecastArray[1].hour;

  let result;

  result = currentDay.slice(currentHours, currentHours + hours);
  if (result.length < hours) {
    const difference = hours - result.length;
    result = [...result, ...nextDay.slice(0, difference)];
  }
  return result;
}
