// //+ #125  Length of missing array  сделал проверку на null

// const isNullOrEmpty = (value) => value === null || value.length === 0

// function getLengthOfMissingArray(arrayOfArrays) {
//   if (isNullOrEmpty(arrayOfArrays) || arrayOfArrays.some(isNullOrEmpty)) {
//     return 0
//   }

//   const s = arrayOfArrays.map((array) => array.length).sort((a, b) => a - b)

//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i + 1] - s[i] !== 1) {
//       return s[i] + 1
//     }
//   }
// }
// console.log(
//   getLengthOfMissingArray([
//     [],
//     [0, 2],
//     [2],
//     [3, 4, 3, 0],
//     [0, 3, 1, 4, 4],
//     [0, 2, 4, 3, 2, 2],
//   ])
// ) //, 3);
// console.log(
//   getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
// ) //, 2);
// console.log(getLengthOfMissingArray([])) //, 2);

// #129 Sort the odd ----

// function sortArray(array) {
//   const odds = array.filter((num) => num % 2).sort((a, b) => a - b)
//   let i = 0
//   const newArr = array.map((item) => {
//     if (item % 2 === 0) {
//       return item
//     } else {
//       const tmp = odds[i]
//       i++
//       return tmp
//     }
//   })
//   return newArr
//   // [5, 3, 2, 8, 1, 4]
//   // [1,3,5]
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4])) //, [1, 3, 2, 8, 5, 4]);
// console.log(sortArray([5, 3, 1, 8, 0])) //, [1, 3, 5, 8, 0]);
// console.log(sortArray([])) //,[]);

// //#132 Simple Fun #79: Delete a Digit  ----
// function deleteDigit(n) {
//   let arr = Array.from(n.toString())
//   const result = []
//   for (let i = 0; i < arr.length; i++) {

//   }
//   return result.join('')
// }

// console.log('>>>', deleteDigit(1234567))
// // console.log(deleteDigit(152)) //,52)

// console.log(deleteDigit(1001)) //,101)

// console.log(deleteDigit(10)) //,1)

// #133  Equal Sides Of An Array  ----
// function findEvenIndex(arr) {
//   for (let i = 1; i < arr.length - 1; i++) {}
// }
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])) //,3, "The array was: [1,2,3,4,3,2,1] \n");
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])) //,1, "The array was: [1,100,50,-51,1,1] \n");
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])) //,-1, "The array was: [1,2,3,4,5,6] \n");
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])) //,3, "The array was: [20,10,30,10,10,15,35] \n");
// console.log(findEvenIndex([20, 10, 30, 10, 5, 5, 5, 5])) //,2, "The array was: [20,10,30,10,10,15,35] \n");

// //#134 Easy Balance Checking   ----
// function balance(book) {
//   const result = book.replace(/[^a-zA-Z0-9\.\s]/g, '').split('\n')

//   const resultbook.split('').filter(x => !'?:!:,'.includes(x)).join('')
//   console.log(result)
// }
// // "Original_Balance:_1000.00
// // 125_Market_125.45_Balance_874.55
// // 126_Hardware_34.95_Balance_839.60
// // 127_Video_7.45_Balance_832.15
// // 128_Book_14.32_Balance_817.83
// // 129_Gasoline_16.10_Balance_801.73
// // Total_expense__198.27
// // Average_expense__39.65"

// // var b1 = `1000.00!=

// // 125 Market !=:125.45
// // 126 Hardware =34.95
// // 127 Video! 7.45
// // 128 Book :14.32
// // 129 Gasoline ::16.10
// // `
// // var b1sol = `Original Balance: 1000.00\r
// // 125 Market 125.45 Balance 874.55\r
// // 126 Hardware 34.95 Balance 839.60\r
// // 127 Video 7.45 Balance 832.15\r
// // 128 Book 14.32 Balance 817.83\r
// // 129 Gasoline 16.10 Balance 801.73\r
// // Total expense  198.27\r
// // Average expense  39.65`

// var b2 = `1233.00
// 125 Hardware;! 24.8?;
// 123 Flowers 93.5
// 127 Meat 120.90
// 120 Picture 34.00
// 124 Gasoline 11.00
// 123 Photos;! 71.4?;
// 122 Picture 93.5
// 132 Tyres;! 19.00,?;
// 129 Stamps 13.6
// 129 Fruits{} 17.6
// 129 Market;! 128.00?;
// 121 Gasoline;! 13.6?;`
// balance(b2)
// // var b2sol = `Original Balance: 1233.00\r
// 125 Hardware 24.80 Balance 1208.20\r
// 123 Flowers 93.50 Balance 1114.70\r
// 127 Meat 120.90 Balance 993.80\r
// 120 Picture 34.00 Balance 959.80\r
// 124 Gasoline 11.00 Balance 948.80\r
// 123 Photos 71.40 Balance 877.40\r
// 122 Picture 93.50 Balance 783.90\r
// 132 Tyres 19.00 Balance 764.90\r
// 129 Stamps 13.60 Balance 751.30\r
// 129 Fruits 17.60 Balance 733.70\r
// 129 Market 128.00 Balance 605.70\r
// 121 Gasoline 13.60 Balance 592.10\r
// Total expense  640.90\r
// Average expense  53.41`

// describe('balance', () => {
// 	it('Basic tests', () => {
// 		Test.assertEquals(balance(b1), b1sol)
// 		Test.assertEquals(balance(b2), b2sol)
// 	})
// })
// //+ #135  Sort with a sorting array
// function sort(initialArray, sortingArray) {
//   const newArr = []
//   for (let i = 0; i < initialArray.length; i++) {
//     newArr[sortingArray[i]] = initialArray[i]
//   }

//   return newArr
// }

// console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3])) //, [1, 3, 2, 5, 4]);

//+ #136 Zero-plentiful Array

// function zeroPlentiful(arr) {
//   // const zeros = arr.filter((zero) => zero === 0)
//   // return zeros.length > 3 ? Math.floor(zeros.length / 4) : 0
//   let counter = 0
//   let zero = 0
//   let all = 0

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       counter++
//       if (counter === 1) {
//         all++
//       }
//       if (counter === 4) {
//         zero++
//       }
//     } else {
//       counter = 0
//     }
//   }
//   console.log({ all, zero })
//   if (all !== zero) {
//     return 0
//   }
//   return zero
// }
// console.log(zeroPlentiful([3])) ///,0);
// console.log(zeroPlentiful([0, 0, 0, 0, 1, 0])) ///,1);
// console.log(zeroPlentiful([0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0])) ///,2);0

// // #137 RGB To Hex Conversion  ----

// function rgb(r, g, b) {
//   // complete this function
// }

// console.log(rgb(0, 0, 0)) //, '000000')
// console.log(rgb(0, 0, -20)) //, '000000')
// console.log(rgb(300, 255, 255)) //, 'FFFFFF')
// console.log(rgb(173, 255, 47)) //, 'ADFF2F')

//+ #138 Birthday I - Cake ????? не все тесты проходит
//codePointAt --????
// function cake(x, y) {
//   const total = Array.from(y)
//     .map((item, i) => (i % 2 === 0 ? y.charCodeAt(i) : i + 1))
//     .reduce((acc, num) => acc + num)
//   console.log(total)
//   let candles = x * 0.7
//   return total >= candles ? 'Fire!' : 'That was close!'

// //   You will work out the number of candles that will fall from the provided string (y).
// //   You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in y, with the alphabetical position of each odd indexed character in y to give the string a total.

// // example: 'abc' --> a=97, b=2, c=99 --> y total = 198.

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

//+ #139 The Span Function
function span(arr, predicate) {
  const one = []
  const array = arr.every((item) => predicate(item) && one.push(item))

  console.log(a)
  const two = arr.slice(one.length)
  return [one, two]

  //   const a = arr.findIndex((item) => !predicate(item))
  //   const one = arr.slice(0, a)
  //   const two = arr.slice(a)
}
// Functions for use in tests
function isEven(x) {
  return Math.abs(x) % 2 === 0
}

function isOdd(x) {
  return Math.abs(x) % 2 !== 0
}

// Arrays for use in tests
var arr1 = [2, 4, 6, 1, 4, 8]
var arr2 = [1, 4, 5, 7, 6]
var arr3 = [13, 17, 19, 11, 21]

//console.log(span([], tr)) //, [[], []])) //;

console.log(span(arr1, isEven)) //, [[2,4,6],[1,4,8]]);

console.log(span(arr2, isEven)) //, [[], arr2]);

console.log(span(arr3, isOdd)) //, [arr3,[]]);

// #140 Element equals its index ?????? That took too long, duration ( actual: 3331 ms ) should be under 150 ms

// sorted array → binary search
function indexEqualsValue(a) {
  const b = a.filter((item, i) => item === i)
  return b.length > 0 ? b[0] : -1
}

console.log(indexEqualsValue([-8, 0, 2, 5])) //, 2 );
console.log(indexEqualsValue([9, 10, 11, 12, 13, 14])) //, -1 );
console.log(indexEqualsValue([0])) //, 0 );

// #141  Sort by Last Char   -------------

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
