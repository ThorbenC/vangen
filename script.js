function gooiButton() {
    try {
      bal.gooi();
    } catch (error) {
      if (error instanceof ReferenceError) {
        displayErrorMessage("Er is een ReferenceError opgetreden!");
      } else if (error instanceof TypeError) {
        displayErrorMessage("Er is een TypeError opgetreden!");
      } else {
        displayErrorMessage(error.message);
      }
    }
  }
  
  function vangButton() {
    try {
      bal.vang();
    } catch (error) {
      if (error instanceof ReferenceError) {
        displayErrorMessage("Er is een ReferenceError opgetreden!");
      } else if (error instanceof TypeError) {
        displayErrorMessage("Er is een TypeError opgetreden!");
      } else {
        displayErrorMessage(error.message);
      }
    }
  }

function resetButton() {
    bal.reset();
}


var bal = {
    canvasBal: constructBal(),
    balPositie: "links",

    gooi: function () {
        try {
        if (this.balPositie !== "links") {
            let number = Math.round(Math.random() * 2);
            if (number === 0) {
                this.referenceErrorType();
            } else if (number === 1) {
                this.typeErrorType();
            } else {
                throw Error("bal in verkeerde positie")
            }
        }
        this.draw(300, 50);
        this.balPositie = "midden";
    } catch (error) {
        displayErrorMessage(error.message);
    }
    },

    vang: function () {
        try {
        if (this.balPositie !== "midden") {
            let number = Math.round(Math.random() * 2);
            if (number === 0) {
                this.referenceErrorType();
            } else if (number === 1) {
                this.typeErrorType();
            } else {
                throw Error("bal in verkeerde positie")
            }
        }
        this.draw(500, 250);
        this.balPositie = "rechts";
    } catch (error) {
        displayErrorMessage(error.message)
    }
    },

    reset: function () {
        this.draw(100, 250);
        this.balPositie = "links";
    },

    draw: function (x, y) {
        this.canvasBal.clearRect(0, 0, 600, 300);
        this.canvasBal.beginPath();
        this.canvasBal.arc(x, y, 50, 0, 2 * Math.PI);
        this.canvasBal.closePath();
        this.canvasBal.fill();
    },

    referenceErrorType: function () {
        throw new ReferenceError();
    },

    typeErrorType: function () {
        let a = 10;
        a = 20;
    },
}

function constructBal() {
    let bal = document.getElementById("bal").getContext("2d");
    bal.fillStyle = "red";
    bal.beginPath();
    bal.arc(100, 250, 50, 0, 2 * Math.PI);
    bal.closePath();
    bal.fill();
    return bal
}

function displayErrorMessage(message) {
    var errorElement = document.createElement('h3');
    errorElement.textContent = message;
    document.body.appendChild(errorElement);
  }