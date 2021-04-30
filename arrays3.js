// // #125  Length of missing array ------ надо дорешать
// function getLengthOfMissingArray(arrayOfArrays) {
//   const s = arrayOfArrays.map((array) => array.length)
//   const sort = s.sort((a, b) => a - b)
//   console.log(sort)

//   //let ind = sort.findIndex((item, i, array) => item !== i + 1) //????????
//   for (let i = 0; i < sort.length - 1; i++) {
//     if (sort[i + 1] - sort[i] !== 1) {
//       return sort[i] + 1
//     }
//   }
// }
// console.log(
//   getLengthOfMissingArray([
//     [1, 2],
//     [4, 5, 1, 1],
//     [5, 6, 7, 8, 9],
//   ])
// ) //, 3);
// console.log(
//   getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
// ) //, 2);
// console.log(getLengthOfMissingArray([[null], [null, null, null]])) //, 2);
// console.log(
//   getLengthOfMissingArray([
//     ['a', 'a', 'a'],
//     ['a', 'a'],
//     ['a', 'a', 'a', 'a'],
//     ['a'],
//     ['a', 'a', 'a', 'a', 'a', 'a'],
//   ])
// ) //, 5);

//+ #127  Duplicate Encoder  ---- не проходит тесты
// function duplicateEncode(word) {
// const array = Array.from(word.toLowerCase())
// let a = ''
// for (let i = 0; i < word.length; i++) {
//   let count = 0
//   for (let j = 0; j < word.length; j++) {
//     if (word[i] === word[j]) {
//       count++
//     }
//   }
//   if (count > 1) {
//     a += ')'
//   } else {
//     a += '('
//   }
// }
// return a
// }

// console.log(duplicateEncode('din')) //,"(((");
// console.log(duplicateEncode('recede')) //,"()()()");
// console.log(duplicateEncode('Success')) //,")())())","should ignore case");
// console.log(duplicateEncode('(( @')) //,"))((");

// // #129 Sort the odd ----

// function sortArray(array) {
//   // Return a sorted array.
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4])) //, [1, 3, 2, 8, 5, 4]);
// console.log(sortArray([5, 3, 1, 8, 0])) //, [1, 3, 5, 8, 0]);
// console.log(sortArray([])) //,[]);

// // #132 Simple Fun #79: Delete a Digit  ----
// function deleteDigit(n) {
//   //coding and coding..
// }

// console.log(deleteDigit(152)) //,52)

// console.log(deleteDigit(1001)) //,101)

// console.log(deleteDigit(10)) //,1)

// // #133  Equal Sides Of An Array  ----
// function findEvenIndex(arr) {
//   //Code goes here!
// }
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])) //,3, "The array was: [1,2,3,4,3,2,1] \n");
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])) //,1, "The array was: [1,100,50,-51,1,1] \n");
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])) //,-1, "The array was: [1,2,3,4,5,6] \n");
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])) //,3, "The array was: [20,10,30,10,10,15,35] \n");
// // #134 Easy Balance Checking   ----
// function balance(book) {
//   // your code
//   // Please use .toFixed(2) to format numbers
// }

// //+ #135  Sort with a sorting array
// function sort(initialArray, sortingArray) {
//   const newArr = []
//   for (let i = 0; i < initialArray.length; i++) {
//     newArr[sortingArray[i]] = initialArray[i]
//   }

//   return newArr
// }

// console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3])) //, [1, 3, 2, 5, 4]);

// // #136 Zero-plentiful Array  ----

// function zeroPlentiful(arr) {
//   // const zeros = arr.filter((zero) => zero === 0)
//   // return zeros.length > 3 ? Math.floor(zeros.length / 4) : 0
//   let counter = 0
//   let zero = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       counter++
//       if (counter === 4) {
//         zero++
//       }
//     } else {
//       counter = 0
//     }
//   }
//   return zero
// }
// console.log(zeroPlentiful([3])) ///,0);
// console.log(zeroPlentiful([0, 0, 0, 0, 1, 0])) ///,1);

// // #137 RGB To Hex Conversion  ----

// function rgb(r, g, b) {
//   // complete this function
// }

// console.log(rgb(0, 0, 0)) //, '000000')
// console.log(rgb(0, 0, -20)) //, '000000')
// console.log(rgb(300, 255, 255)) //, 'FFFFFF')
// console.log(rgb(173, 255, 47)) //, 'ADFF2F')

// //+ #138 Birthday I - Cake ????? не все тесты проходит
// //codePointAt --????
// function cake(x, y) {
//   const total = Array.from(y)
//     .map((item, i) => (i % 2 === 0 ? y.charCodeAt(i) : i + 1))
//     .reduce((acc, num) => acc + num)
//   console.log(total)
//   let candles = x * 0.7
//   return total >= candles ? 'Fire!' : 'That was close!'

//   // let total = 0
//   // for (let i = 0; i < y.length; i++) {
//   //   if (i % 2 === 0) {
//   //     total += y.charCodeAt(i)
//   //   } else {
//   //     total += i + 1
//   //   }
//   // }
//   // let candles = x * 0.7
//   // return total >= candles ? 'Fire!' : 'That was close!'
// }

// console.log(cake(900, 'jmhttbhi')) //, 'That was close!');
// console.log(cake(56, 'ifkhchlhfd')) //, 'Fire!');
// console.log(cake(256, 'aaaaaddddr')) //, 'Fire!');

// //+ #139 The Span Function
// function span(arr, predicate) {
//   const one = []
//   arr.every((item) => predicate(item) && one.push(item))
//   const two = arr.slice(one.length)
//   return [one, two]
// }
// // Functions for use in tests
// function isEven(x) {
//   return Math.abs(x) % 2 === 0
// }

// function isOdd(x) {
//   return Math.abs(x) % 2 !== 0
// }

// // Arrays for use in tests
// var arr1 = [2, 4, 6, 1, 4, 8]
// var arr2 = [1, 4, 5, 7, 6]
// var arr3 = [13, 17, 19, 11, 21]

// //console.log(span([], tr)) //, [[], []])) //;

// console.log(span(arr1, isEven)) //, [[2,4,6],[1,4,8]]);

// console.log(span(arr2, isEven)) //, [[], arr2]);

// console.log(span(arr3, isOdd)) //, [arr3,[]]);

// // #140 Element equals its index ?????? That took too long, duration ( actual: 3331 ms ) should be under 150 ms

// function indexEqualsValue(a) {
//   const b = a.filter((item, i) => item === i)
//   return b.length > 0 ? b[0] : -1
// }

// console.log(indexEqualsValue([-8, 0, 2, 5])) //, 2 );
// console.log(indexEqualsValue([9, 10, 11, 12, 13, 14])) //, -1 );
// console.log(indexEqualsValue([0])) //, 0 );

// // #141  Sort by Last Char   -------------

// function last(x) {
//   const reverse = x
//     .split(' ')
//     .map((item) => Array.from(item).reverse().join(''))
//   const newReverse = reverse.sort()
//   return newReverse.map((item) => Array.from(item).reverse().join(''))
// }

// console.log(last('man i need a taxi up to ubud')) //, ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
// console.log(last('what time are we climbing up the volcano')) //, ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
// console.log(last('take me to semynak')) //, ['take', 'me', 'semynak', 'to']);

// //+ #142 Sort array by string length

// function sortByLength(array) {
//   return array.sort((a, b) => a.length - b.length)
// }

// console.log(sortByLength(['Beg', 'Life', 'I', 'To'])) //,["I", "To", "Beg", "Life"]);

// console.log(sortByLength(['', 'Moderately', 'Brains', 'Pizza'])) //,["", "Pizza", "Brains", "Moderately"]);

// console.log(sortByLength(['Longer', 'Longest', 'Short'])) //,["Short", "Longer", "Longest"]);

// // #143 Binary Search   ---------------------

// function binSearch(arr, toSearch) {
//   let ind = Math.ceil((arr.length - 1) / 2)

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[ind] > toSearch) {
//       arr = arr.slice(0, arr[ind])
//     } else {
//       arr = arr.slice(arr[ind])
//     }
//   }
// }

// let arr = [1, 2, 3, 4, 5]

// console.log(binSearch(arr, 6)) //, -1)
// console.log(binSearch(arr, 2)) //, 1)
