// // Array spreading
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// // Object spreading
// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Function arguments
function sum(a, b, c) {
    return a + b + c;
}
sum(...arr1); // 6


// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9]
// let res=[...arr1,...arr2]
// console.log(res)
