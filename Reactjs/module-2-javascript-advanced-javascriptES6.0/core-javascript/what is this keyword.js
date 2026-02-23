// 1. Global context
console.log(this); // window (browser) or global (Node.js)

// 2. In a regular function
function regularFunc() {
    console.log(this); // window or global (non-strict mode)
}

// 3. In strict mode
function strictFunc() {
    'use strict';
    console.log(this); // undefined
}

// 4. In an object method
const obj = {
    name: 'Brijesh',
    greet() {
        console.log(this.name); // 'Brijesh' - this refers to obj
    }
};
obj.greet();

// 5. In a constructor function
function Person(name) {
    this.name = name; // this refers to the new object being created
}
const person = new Person('Brijesh');

// 6. Arrow functions (lexical this)
const obj2 = {
    name: 'Brijesh',
    regularFunc() {
        console.log(this.name); // 'Brijesh'
    },
    arrowFunc: () => {
        console.log(this.name); // undefined - arrow function uses outer this
    }
};

// 7. Using call, apply, bind
function introduce(city) {
    console.log(`${this.name} is from ${city}`);
}
const person2 = { name: 'Brijesh' };
introduce.call(person2, 'Delhi'); // explicitly set this
introduce.apply(person2, ['Delhi']);
const boundFunc = introduce.bind(person2);
boundFunc('Delhi');