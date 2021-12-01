
let words = ['|', '/', '-', '\\','|', '/', '-', '\\', '|']

let timer = 100;

for (let char of words) {

  setTimeout(() => {
    process.stdout.write(`\r${char}   `)
  }, timer);
  timer += 200;
};

setTimeout(() => {
  console.log('')
}, timer)


/*
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);
*/