
//Task 1
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hello");
        resolve();
    }, 3000);
});
promise.then(() => {});


//Task 2
function delay(time) {
    return new Promise((resolve,reject) => setTimeout(resolve, time));
}

async function aaa() {
    console.log("first call");
    await delay(4000);
    console.log("second call");
}
aaa()

//Task 3
function createDice() {
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 11);
        if (number < 6) {
            reject(number);
        } else {
            resolve(number);
        }
    });
}

const promise1 = createDice();
const promise2 = createDice();
const promise3 = createDice();

Promise.all([promise1, promise2, promise3])
    .then(() => console.log("You are lucky"))
    .catch(() => console.log("Not today"));
