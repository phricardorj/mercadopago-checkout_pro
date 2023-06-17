import moment from "moment";
import "moment-timezone";

// Definir o fuso horário para Brasília
moment.tz.setDefault("America/Sao_Paulo");

function generateOrderNumber() {
  const currentDate = moment();
  const year = currentDate.year();
  const month = currentDate.month() + 1;
  const day = currentDate.date();
  const orderNumber = Number(
    `${year}${padZero(month)}${padZero(day)}${generateRandomNumber(8)}`
  );
  return orderNumber;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}

function generateRandomNumber(length) {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default generateOrderNumber;
