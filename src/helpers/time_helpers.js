export function seconds_to_minutes(seconds) {
  if (seconds.toString().indexOf(":")) seconds = minutes_to_seconds(seconds.toString())
  seconds = parseInt(seconds);
  const sec = seconds % 60
  const min = parseInt(seconds / 60)
  return `${min}:${("00" + sec.toString()).slice(-2)}`
}

export function minutes_to_seconds(minutes_string) {
  if (minutes_string.indexOf(":") == -1) return parseInt(minutes_string)

  const parts = minutes_string.split(":");
  const sec = parseInt(parts[1]);
  const min = parseInt(parts[0]);
  if (isNaN(min)) return sec;
  if (isNaN(sec)) return min * 60;
  return min * 60 + sec;
}