let newX = 0,
  newY = 0,
  startX = 0,
  startY = 0;

const card = document.getElementById("card");

card.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
  // Get the current mouse position
  startX = e.clientX;
  startY = e.clientY;
  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
  console.log(`startX: ${startX}, startY: ${startY}`);
  console.log(`offsetLeft: ${card.offsetLeft} , offetTop: ${card.offsetTop} `);
}

function mouseMove(e) {
  // Calculate the new cursor position
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  // Update the starting mouse position for the next move
  startX = e.clientX;
  startY = e.clientY;

  // Set the element's new position
  // injecting the calculated position into style attribute (css)
  // This is comparable to having the below code in css:
  // .card { position: absolute; top: someValue; left: someValue; }
  // position must be absolute or relative for top and left to work
  card.style.top = card.offsetTop - newY + "px";
  card.style.left = card.offsetLeft - newX + "px";

  //console.log(`newX: ${newX}, newY: ${newY}`);
}

function mouseUp(e) {
  document.removeEventListener("mousemove", mouseMove);
  console.log(`endX: ${startX}, endY: ${startY}`);
  console.log(`offsetLeft: ${card.offsetLeft} , offetTop: ${card.offsetTop} `);
}
