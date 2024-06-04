
export function dataFormat(dateString, language) {
  let formattedDate = dateString?.split("T")[0]?.replaceAll("-", "/");

  const date = new Date(dateString);
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  let amOrPm;
  let formattedHours;

  if (language === 'rtl') {
    amOrPm = hours >= 12 ? 'م' : 'ص';
    formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  } else {
    amOrPm = hours >= 12 ? 'pm' : 'am';
    formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  }
  const formattedTime = `${String(formattedHours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")} ${amOrPm}`;

  return [formattedDate, formattedTime];
}


