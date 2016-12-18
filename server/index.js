const five = require('johnny-five');
const schedule = require('node-schedule');

const board = new five.Board();
let thermoPin;

const onCronString = '10 * * * * *';
const offCronString = '20 * * * * *';

const onJobBuilder = () => {
  return schedule.scheduleJob(onCronString, () => thermoPin.high());
}

const offJobBuilder = () => {
  return schedule.scheduleJob(offCronString, () => thermoPin.low());
}

board.on('ready', () => {
  thermoPin = new five.Pin(2);
  thermoPin.low();
  onJobBuilder();
  offJobBuilder();
});
