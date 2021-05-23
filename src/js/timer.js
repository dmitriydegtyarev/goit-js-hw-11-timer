import { refs } from './refs';
import formatTimeComponents from './transformTime'

const { daysValue, hoursValue, minsValue, secsValue } = refs;

class CountdownTimer {

  constructor({ selector, targetDate }) {
    this.timerId = null;
    this.selector = selector;
    this.targetDate = targetDate;
    this.days = daysValue;
    this.hours = hoursValue;
    this.mins = minsValue;
    this.secs = secsValue;

    this.start();
  }

  start() {
    this.intervalId = setInterval(() => {
      const differenceTime = this.targetDate - Date.now();
      const time = formatTimeComponents(differenceTime);
      updateTimerTime(time);
    }, 1000);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

function updateTimerTime({ days, hours, mins, secs }) {
  daysValue.textContent = `${days}`;
  hoursValue.textContent = `${hours}`;
  minsValue.textContent = `${mins}`;
  secsValue.textContent = `${secs}`;
}