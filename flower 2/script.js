let colorScaleObj = {
    red: 255,
    green: 255,
    blue: 255,
  };
  let colorInputs = document
    .querySelectorAll("input[type='number']")
    .forEach((input) => {
      input.onchange = (e) => {
        console.log(e.target.name);
        colorScaleObj[e.target.name] = e.target.value;
        renderBackgroundColor(colorScaleObj);
      };
    });

  function renderBackgroundColor(colorScale) {
    document.querySelector(
      ".app"
    ).style.background = `linear-gradient(black,rgb(${colorScale.red},${colorScale.green}, ${colorScale.blue}))`;
  }


/*cool fireworks library but dont want to bother them for this sample */

 // let confettiElement = document.querySelector("#confetti-canvas");
 //  const fireworks = new Fireworks.default(confettiElement, {
 //    acceleration: 1.01,
 //    delay: {
 //      min: 50,
 //      max: 125,
 //    },
 //  });
 //  setTimeout(() => {
 //    fireworks.start();
 //  }, 1500);