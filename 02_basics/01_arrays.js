//JavaScript arrays are resizable and can contain a mix of different data types.
const arr1=[0,1,2,3,4,5]
const frnds=["Pawan","Khushi","Isha"]
const arr2= new Array(1,2,3,4)

console.log(arr2[0])


arr1.push(6)
console.log(arr1)
arr1.push(7)
console.log(arr1)

arr1.pop()
console.log(arr1)
 
arr1.unshift(9)
console.log(arr1)
arr1.shift()
console.log(arr1)


console.log(arr1.includes(2))
console.log(arr1.indexOf(9))


//slice() returns a copied portion of an array without changing the original array.
//splice() modifies the original array by adding, removing, or replacing elements.

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);