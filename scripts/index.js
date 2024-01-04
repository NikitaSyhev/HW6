
function Vehicle(name, speed, x, y) {
    if(!new.target) { 
        throw new Error('Invalid inicialization: operator new expected;'); //
    }
    this.name = name;
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.move = function(x,y) {
        this.x = x;
        this.y = y;
    } 
}

function Car(name, speed, x,y, horsePower) {
    if(!new.target) { 
        throw new Error('Invalid inicialization: operator new expected;'); //
    }
    this.horsePower = horsePower;
    this.__proto__= new Vehicle(name, speed, x, y); 
    this.beep = function() {
        console.log('Биииип');
    }
}


//создаем объект CAR
let car1 = new Car('BMW', 200, 20, 20, 300);
// выводим его в консоль
console.log(car1);
console.log('Вызываем метод beep().');
car1.beep();
console.log('Вызываем метод move(50, 50) и выводим изененный объект.');
car1.move(50,50);
console.log(car1);