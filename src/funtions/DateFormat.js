// Formata data para o formato PT-BR
export default function formatDate(dt, prop) {
  let eventMonth = "";
  let nameMonth = "";
  let eventDay = "";
  let eventYear = "";

  if (dt) {
    eventMonth = dt.substr(3, 2);
    eventDay = dt.substr(0, 2);
    eventYear = dt.substr(6, 4);

    switch (eventMonth) {
      case "01":
        nameMonth = "JAM";
        break;

      case "02":
        nameMonth = "FEV";
        break;

      case "03":
        nameMonth = "MAR";
        break;

      case "04":
        nameMonth = "ABR";
        break;

      case "05":
        nameMonth = "MAI";
        break;

      case "06":
        nameMonth = "JUN";
        break;

      case "07":
        nameMonth = "JUL";
        break;

      case "08":
        nameMonth = "AGO";
        break;

      case "09":
        nameMonth = "SET";
        break;

      case "10":
        nameMonth = "OUT";
        break;

      case "11":
        nameMonth = "NOV";
        break;

      case "12":
        nameMonth = "DEZ";
        break;

      default:
        nameMonth = "";
    }
  }
  if (prop === "month") {
    return nameMonth;
  } else if (prop === "day") {
    return eventDay;
  } else if (prop === "year") {
    return eventYear;
  } else {
    return [eventDay, nameMonth, eventYear];
  }
}
