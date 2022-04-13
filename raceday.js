let raceNumber = Math.floor(Math.random() * 1000);
// runner registered or not
let runnerRegisteredEarly = false;
// runners age
let runnersAge = 28
// adults are 18 or older
if (runnerRegisteredEarly && runnersAge > 18) {
  raceNumber =+ 1000;
}

if (runnerRegisteredEarly && runnersAge > 18) {
  console.log(`The race will start at 9:30 am and your number is ${raceNumber}.`);
} else if (!runnerRegisteredEarly && runnersAge > 18) {
  console.log(`Late adults run at 11:00 am and your race number is: ${raceNumber}.`);
} else if (runnersAge < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration) and your race number is: ${raceNumber}.`);
} else {
  console.log('Go to registration desk!');
}