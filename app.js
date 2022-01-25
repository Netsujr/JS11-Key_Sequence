const secretCode = 'renato';
pressed = [];



window.addEventListener('keyup', (event) => {
  // console.log(event.key);
  pressed.push(event.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  // only caputering the amount of letters we need, in this case, 6
  if(pressed.join('').includes(secretCode)) {
    console.warn("YOU FOUND THE SECRET CODE!");
    cornify_add();
  }
  console.log(pressed.join(''));
});
