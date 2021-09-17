const totalBtn = document.querySelector('.btn');
const showTotal = document.getElementById('total_price');
const selectRoom = document.getElementById('typeRoom');
const selectSpa = document.getElementById('spa');
const selectSizeRoom = document.getElementById('beds');
const selectNumberNights = document.getElementById('night');
const selectDayParking = document.getElementById('parking');

const prices = {
  standard: 100,
  junior: 120,
  suite: 150,
  single: 0.75,
  double: 1,
  triple: 1.25,
  parking: 10,
};

let result = 0;

const parkingCheck = () => {
  let parkingTotal = prices.parking * selectDayParking.value;
  result += parkingTotal;
  return result;
};

const checkout = () => {
  let nightResult = selectNumberNights.value * prices[typeRoom.value] * prices[beds.value];
  result += nightResult;
  return result;
};
const spaCheck = () => {
  if (selectSpa.checked === true) {
    result += 20 * selectNumberNights.value * prices[beds.value];
    return result;
  } else {
    return 0;
  }
};

const showTotalCost = () => {
  console.log(spaCheck());
  console.log(parkingCheck());
  console.log(checkout());
};

totalBtn.addEventListener('click', () => {
  showTotalCost();
  showTotal.innerHTML = `El coste total de la estancia será de ${result} €.`;
});
