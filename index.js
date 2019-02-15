// конструктор CAR який буде створювати нові авто коли ми будемо його викликати

let SportCar = function(options) {
    this.x = options.x;
    this.y = options.y;
    this.speed = options.speed || Math.random();
    this.speedIncrement = options.speedIncrement || Math.random();
    this.draw();
    this.moveRight();
};


SportCar.prototype.draw = function() {
    let sportCarHtml = '<img src="https://img.icons8.com/color/48/000000/f1-race-car-top-veiw.png">';
    this.sportCarElement = $(sportCarHtml);
    this.sportCarElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });
    $(".track").append(this.sportCarElement);
};

SportCar.prototype.moveRight = function() {
    this.speed += this.speedIncrement;
    this.x += this.speed;
    this.sportCarElement.css({
        left: this.x,
        top: this.y
    });
};

SportCar.prototype.drive = function() {
	this.driveHendler = setInterval(() => this.moveRight(), 10);
};

SportCar.prototype.stop = function() {
	clearInterval(this.driveHendler);
};

let formula = new SportCar({
    x: 30,
    y: 100
});

let formula1 = new SportCar({
    x: 30,
    y: 150
});

let formula2 = new SportCar({
    x: 30,
    y: 200
});

let formula3 = new SportCar({
    x: 30,
    y: 250
});

let formula4 = new SportCar({
    x: 30,
    y: 300
});

let formula5 = new SportCar({
    x: 30,
    y: 350
});

let formula6 = new SportCar({
    x: 30,
    y: 255
});



document.querySelector(".start").addEventListener("click", formula1.drive.bind(formula1));
document.querySelector(".stop").addEventListener("click", formula1.stop.bind(formula1));

document.querySelector(".start").addEventListener("click", formula.drive.bind(formula));
document.querySelector(".stop").addEventListener("click", formula.stop.bind(formula));

document.querySelector(".start").addEventListener("click", formula2.drive.bind(formula2));
document.querySelector(".stop").addEventListener("click", formula2.stop.bind(formula2));

document.querySelector(".start").addEventListener("click", formula3.drive.bind(formula3));
document.querySelector(".stop").addEventListener("click", formula3.stop.bind(formula3));

document.querySelector(".start").addEventListener("click", formula4.drive.bind(formula4));
document.querySelector(".stop").addEventListener("click", formula4.stop.bind(formula4));

document.querySelector(".start").addEventListener("click", formula5.drive.bind(formula5));
document.querySelector(".stop").addEventListener("click", formula5.stop.bind(formula5));

document.querySelector(".start").addEventListener("click", formula6.drive.bind(formula6));
document.querySelector(".stop").addEventListener("click", formula6.stop.bind(formula6));
