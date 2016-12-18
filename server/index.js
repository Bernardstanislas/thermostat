const five = require('johnny-five');
const schedule = require('node-schedule');

const board = new five.Board();

board.on('ready', () => {
  const led = new five.Led(13);
  schedule.scheduleJob('/2 * * * * *', () => {
    led.on();
  });
  setTimeout(() => {
    schedule.scheduleJob('* * * * * *', () => {
      led.off();
    });
  }, 1000);
  led.on();
});
