const five = require('johnny-five');
const schedule = require('node-schedule');

const board = new five.Board();
let thermoPin;

const onCronString = '0 0 18 * * 1-5';
const offCronString = '0 0 8 * * 1-5';

const onJobBuilder = () => {
  return schedule.scheduleJob(onCronString, () => thermoPin.high());
}

const offJobBuilder = () => {
  return schedule.scheduleJob(offCronString, () => thermoPin.low());
}

board.on('ready', () => {
  thermoPin = new five.Pin(2);
  thermoPin.high();
  onJobBuilder();
  offJobBuilder();
});
