const animationChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
const timeInterval = 200;

/**
 * Function returns an animation in the command line
 * @param array
 * @param index of array
 * @returns animation of array elements
 */
const animation = animationChars.forEach((element, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${element}   `)
  }, timeInterval * index);
});

// Starts a newline when animation is completed
const startNewLine = setTimeout(() => {
  process.stdout.write('\n')
}, timeInterval * animationChars.length)