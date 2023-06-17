function generateOrderNumber() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
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
