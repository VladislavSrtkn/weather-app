// Pass or change the default value of the third parameter to change the number of forecast hours displayed

export default function getHourlyForecast(time, forecast, hours = 15) {
  const currentHours = time.getHours();
  const currentDay = forecast[0].hour;
  const nextDay = forecast[1].hour;

  let result = currentDay.slice(currentHours, currentHours + hours);

  if (result.length < hours) {
    const difference = hours - result.length;
    result = [...result, ...nextDay.slice(0, difference)];
  }
  return result;
}
