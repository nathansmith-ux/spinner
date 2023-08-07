const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
const interval = 200;

/**
 * Function takes in an array and its index value and returns an animation in the command line
 * @param array
 * @param index of array
 * @returns animation of array elements
 */
chars.forEach((char, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, interval * index);
});

setTimeout(() => {
  process.stdout.write('\n');
}, interval * chars.length);