const animationChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
const timeInterval = 200;

/**
 * Function returns an animation in the command line
 * @param array
 * @param index of array
 * @returns animation of array elements
 */
animationChars.forEach((element, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${element}   `);
  }, timeInterval * index);
});

// Starts a newline when animation is completed
setTimeout(() => {
  process.stdout.write('\n');
}, timeInterval * animationChars.length);