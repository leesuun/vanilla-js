/*
const str1 = "KOREA";
const iter = str1[Symbol.iterator]();

for (let i = 0; i < str1.length; i++) {
    console.log(iter.next());
}
*/

const obj = {
    from: 1,
    to: 5,

    [Symbol.iterator]: function () {
        this.value = this.from;
        return this;
    },
    next: function () {
        if (this.value > this.to) {
            return { value: undefined, done: true };
        } else {
            return { value: this.value++, done: false };
        }
    },
};

const iter = obj[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
