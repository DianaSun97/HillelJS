class Plane {
    constructor(name) {
        this.name = name;
        this.isFlying = false;
    }

    takeOff() {
        this.isFlying = true;
    }

    land() {
        this.isFlying = false;
    }
}

class Airport {
    constructor() {
        this.planes = [];
    }

    getFlyingPlanes() {
        return this.planes.filter(plane => plane.isFlying).length;
    }
}

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
    alert(`Number  planes: ${count}`);
});


//Task 2
class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getCourse() {
        let currentYear = new Date().getFullYear();
        let course = currentYear-this.year+1;
        console.log('course =', course);
        if (course > 5) {
            return 5;
        }
       else if ( course  < 1 ) {
           return 0;
        }
       return course;
    }
}

let student = new Student('Diana', 'Smirnova', 2021);
console.log(student.getFullName());
console.log(student.getCourse());


for (let year = 2015; year < 2027; year++) {
    console.log('===============================================');
    const s = new Student('Diana', 'Smirnova', year);
    const c = s.getCourse();
    console.log(`поступил в ${year}, курс сейчас: ${c}`)
}


