// Callback

function getFactorial() {
    const delay = 1000;
    let result = 1;
    setTimeout(() => {
        result *= 1;
        console.log(result);
        setTimeout(() => {
            result *= 2;
            console.log(result);
            setTimeout(() => {
                result *= 3;
                console.log(result);
            }, delay);
        }, delay);
    }, delay);
}

getFactorial();

// Promise
/*
function getFactorial2() {
    const delay = 1000;
    let result = 1;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            result *= 1;
            console.log(result);
            resolve(result);
        }, delay);
    })
        .then((result) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    result *= 2;
                    console.log(result);
                    resolve(result);
                }, delay);
            });
        })
        .then((result) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    result *= 3;
                    console.log(result);
                    resolve(result);
                }, delay);
            });
        });
}

getFactorial2();
*/

// generator

function calc(result, num) {
    const delay = 1000;
    setTimeout(() => {
        gen_itr.next(result * num);
    }, delay);
}

function* getFactorial3() {
    let result = 1;
    result = yield calc(result, 1);
    console.log(result);
    result = yield calc(result, 2);
    console.log(result);
    result = yield calc(result, 3);
    console.log(result);
}
const gen_itr = getFactorial3();

gen_itr.next();
