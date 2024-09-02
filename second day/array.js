// Arrays

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //similar types of data

// // length = 10;
// // index of arr = 0 - 9;

// console.log(arr);

var mixArr = [12, "Strak",  ,  true, 24.25]; //diffrent type of data
            // 0,    1,    2     3,    4
    
//console.log(mixArr); //[12, "Strak", true, 24.25]

// ArrayName[index];

// console.log(mixArr[1]); // Strak
// console.log(mixArr[2]); // true

// console.log(mixArr[4]); // undefined

// console.log(mixArr); //[12, "Strak",  ,  true, 24.25]

// //ArrayName[index] = value;
// mixArr[1] = "Caption";

// console.log(mixArr); //[12, "Caption",  ,  true, 24.25];


//Array Method

// console.log(arr.length);

//console.log(mixArr.length) // length of the array.


// pop(); : it remove last element of the array.

// console.log(arr.pop()); // 10

// console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// shift(); : it remove first element of the array.

// console.log(arr.shift()); // 1

// console.log(arr); // [2, 3, 4, 5, 6, 7, 8, 9, 10]


// push(); : It add value at the last place of the array.
//ArrayName.push(value)             (value maybe number, string, bollen, float,)
// arr.push(100); 

// console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]

// unshift(); : It add value at the fast place of the array.
//ArrayName.unshift(value)
// arr.unshift(100); 

// console.log(arr);  // [100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// console.log(arr.indexOf(5)); // 4 (index of 5 is 4)

// splice(); : it remove the item from the index to given range.
// ArrayName.splice(index, range);
arr.splice(4, 1);

console.log(arr); // [1, 2, 3, 4, 6, 7, 8, 9, 10]
