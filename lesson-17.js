function Plane(name) {
    this.name = name;
    this.isFlying = false;
}

Plane.prototype.takeOff = function() {
    this.isFlying = true;
};

Plane.prototype.land = function() {
    this.isFlying = false;
};

function Airport() {
    this.planes = [];
}

Airport.prototype.getFlyingPlanes = function() {
    return this.planes.filter(function(plane) {
        return plane.isFlying;
    }).length;
};


const airport = new Airport();
const plane1 = new Plane("Plane 1");
const plane2 = new Plane("Plane 2");
const plane3 = new Plane("Plane 3");

airport.planes.push(plane1, plane2, plane3);

document.getElementById("takeoff-button").addEventListener("click", function() {
    for (const plane of airport.planes) {
        plane.takeOff();
    }
    console.log(airport.planes);
});

document.getElementById("land-button").addEventListener("click", function() {
    for (const plane of airport.planes) {
        plane.land();
    }
    console.log(airport.planes);
});

document.getElementById("get-flying-planes").addEventListener("click", function() {
    const count = airport.getFlyingPlanes();
    alert(`Number of flying planes: ${count}`);
});


function User(name, surname) {
    this.name = name;
    this.surname = surname;
}

User.prototype.getFullName = function() {
    return this.name + ' ' + this.surname;
};

function Student(name, surname, year) {
    User.call(this, name, surname);
    this.year = year;
}

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

Student.prototype.getCourse = function() {
    let currentYear = new Date().getFullYear();
    let course = currentYear - this.year + 1;
    console.log('course =', course);
    if (course > 5) {
        return 5;
    } else if (course < 1) {
        return 0;
    }
    return course;
};

let student = new Student('Diana', 'Smirnova', 2021);
console.log(student.getFullName());
console.log(student.getCourse());

for (let year = 2015; year < 2027; year++) {
    console.log('===============================================');
    const s = new Student('Diana', 'Smirnova', year);
    const c = s.getCourse();
    console.log(`поступил в ${year}, курс сейчас: ${c}`)
}

//Task  2
String.prototype.countAllUpperCase = function() {
    const uppercase = /[A-Z]/g;
    const matches = this.match(uppercase);
    return matches ? matches.length : 0;
};
console.log("UpperCase","DDDdiana".countAllUpperCase())
