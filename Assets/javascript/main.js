let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    if (Math.floor(Math.random() * 2) === 1) {
      return (this.state = 1);
    } else {
      return (this.state = 0);
    }
    console.log(this.flip());
  },
  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    if (this.state === 0) {
      return "tails";
    }
    if (this.state === 1) {
      return "heads";
    }
    console.log(stringState);
  },
  toHTML: function () {
    let img = document.createElement("img");
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    if (this.state === 0) {
      // body = document.querySelector("body");
      img.className = "image";
      img.src = "Assets/images/tails.jpg";
      body.appendChild(img);
      return img;
    }
    if (this.state === 1) {
      // body = document.querySelector("body");
      img.className = "image";
      img.src = "Assets/images/Heads.png";
      body.appendChild(img);
      return img;
    }
  },
};
body = document.querySelector("body");

// Write a function called display20Flips
// that uses a loop to flip the coin 20 times.
// Each time the coin flips, display the result of each
// flip as a string on the page (make use of your toString() method)
function display20Flips() {
  for (let i = 0; i < 19; i++) {
    coin.flip();
    add = document.write(coin.toString() + "<br>");
    console.log(coin.toString());
  }
  return add;
}
// console.log(display20Flips());

/*Write a function called display20Images, 
again using a loop to flip the coin 20 times…
but this time instead of displaying the result as a string, 
display the result of each flip as an HTML IMG element on the page 
(make use of your toHTML() method).*/

function display20Images() {
  for (let i = 0; i < 19; i++) {
    coin.flip();

    // let img = document.createElement("img");
    // body = document.querySelector("body");

    // img.className = "img";
    // body.appendChild(img);

    console.log(coin.toHTML(), coin.flip());
  }
  return coin.toHTML();
}

console.log(display20Images());
