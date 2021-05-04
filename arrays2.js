// //+ #115  Row Weights

// function rowWeights(array) {
//   let firstTeam = 0
//   let secondTeam = 0
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//       firstTeam += array[i]
//     } else {
//       secondTeam += array[i]
//     }
//   }
//   return [firstTeam, secondTeam]
// }

// console.log(rowWeights([80])) //, [80, 0])
// console.log(rowWeights([100, 50])) //, [100, 50])
// console.log(rowWeights([0])) //, [0, 0])
// console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])) //, [207, 235])
// console.log(rowWeights([0, 1, 0])) //, [0, 1])

// //+ #116  Scrolling Text

// function scrollingText(text) {
//   let newText = text.toUpperCase()
//   const array = []
//   for (let i = 0; i < newText.length; i++) {
//     array.push(newText)
//     newText = newText.slice(1) + newText[0]
//   }
//   return array
// }

// console.log(scrollingText('abc')) //, ['ABC', 'BCA', 'CAB'])

//+ #117 zipWith

// function zipWith(fn, a0, a1) {
// // return a0.slice(0, a1.length).map((_, i) => fn(a0[i], a1[i]))
// const arr = []
// const len = Math.min(a0.length, a1.length)
// for (let i = 0; i < len; i++) {
//   console.log(a0[i], a1[i])
//   arr.push(fn(a0[i], a1[i]))
// }
// return arr
// }
// const plus = (a, b) => a + b

// console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1])) //, [6,6,6,6,6,6]);
// console.log(zipWith(plus, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1])) //, [6,6,6,6,6  ]);
// console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2])) //, [6,6,6,6,6  ]);

// //+ #118 Beginner - Lost Without a Map
// function maps(x) {
//   return x.map((num) => num * 2)
// }

// console.log(maps([1, 2, 3])) //, [2, 4, 6]);

// //+ #119 Array plus array
// function arrayPlusArray(arr1, arr2) {
//   return [...arr1, ...arr2].reduce((a, b) => a + b, 0)
// }

// console.log(arrayPlusArray([], [])) //, 0);
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) //, 21);
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])) //, -21);

// //+ #120  Is every value in the array an array?

// function arrCheck(value) {
//   return value.every((item) => Array.isArray(item))
// }
// console.log(arrCheck([])) //, true);
// console.log(arrCheck(['A', 'R', 'R', 'A', 'Y'])) //, false);

// // [...arr1, ...arr2].every(f) === arr1.every(f) && arr2.every(f)

// // arr2.every(f) === [].every(f) && arr2.every(f)

// // https://en.wikipedia.org/wiki/Vacuous_truth

// //+ #121  Make a square box!

// function box(n) {
//   const arr = []
//   arr.push('-'.repeat(n))
//   for (let i = 0; i < n - 2; i++) {
//     arr.push('-' + ' '.repeat(n - 2) + '-')
//   }
//   arr.push('-'.repeat(n))
//   return arr
// }

// console.log(box(5)) //, ['-----', '-   -', '-   -', '-   -', '-----'])
// console.log(box(2)) //, ['--', '--'])
// console.log(box(3)) //, ['---', '- -', '---'])

//+ #122  Magic Index
// function findMagic(arr) {
//   //return arr.find((item,ind) => item === ind) || -1;
//   //return arr.findIndex((ind) => arr[ind] === ind)
//   let magicNum = -1
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === i) {
//       magicNum = arr[i]
//     }
//   }
//   return magicNum
// }

// // //+ #123 Flatten and sort an array
// function flattenAndSort(array) {
//   /* const newArray = array.reduce((a, b) => a.concat(b), [])
//     return newArray.sort((a, b) => a - b) */
//   return [].concat(...array).sort((a, b) => a - b)
// }
// console.log(flattenAndSort([])) //, []);
// console.log(flattenAndSort([[], []])) //, []);
// console.log(flattenAndSort([[], [1]])) //, [1]);
// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])) //, [1, 2, 3, 4, 5, 6, 100]);

// //+ #124 Two Sum

// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }

// console.log(twoSum([9, 2, 1, 3], 4)) // [2,3]

// console.log(twoSum([1, 2, 3], 4)) //.sort(numericalCompare)) //, [0,2]);
// console.log(twoSum([1234, 5678, 9012], 14690)) //.sort(numericalCompare)) //, [1,2]);
// console.log(twoSum([2, 2, 3], 4)) //.sort(numericalCompare)) //, [0,1]);

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
// //+ #126  Data Reverse
// function dataReverse(data) {
//   const reverse = []
//   for (let i = 0; i < data.length; i += 8) {
//     let a = data.slice(i, i + 8)
//     reverse.unshift(...a)
//   }
//   return reverse
// }

// //const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
// console.log(dataReverse(data1)) //,data2)
// const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]
// //const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
// console.log(dataReverse(data3)) //,data4)

// //+ #127  Duplicate Encoder
// function duplicateEncode(word) {
//   let a = ''
//   const words = word.toLowerCase()
//   for (let i = 0; i < words.length; i++) {
//     let count = 0
//     for (let j = 0; j < words.length; j++) {
//       if (words[i] === words[j]) {
//         count++
//       }
//     }
//     if (count > 1) {
//       a += ')'
//     } else {
//       a += '('
//     }
//   }
//   return a
// }

// console.log(duplicateEncode('din')) //,"(((");
// console.log(duplicateEncode('recede')) //,"()()()");
// console.log(duplicateEncode('Success')) //,")())())","should ignore case");
// console.log(duplicateEncode('(( @')) //,"))((");

//+ #128 Alternate capitalization

// function capitalize(s) {
//   arrLetters = s.split('')

//   let firstCap = ''
//   let secondCap = ''

//   for (let i = 0; i < arrLetters.length; i++) {
//     if (i % 2 === 0) {
//       firstCap += arrLetters[i].toUpperCase()
//       secondCap += arrLetters[i]
//     } else {
//       firstCap += arrLetters[i]
//       secondCap += arrLetters[i].toUpperCase()
//     }
//   }
//   return [firstCap, secondCap]
// }

// console.log(capitalize('abracadabra')) //, ['AbRaCaDaBrA', 'aBrAcAdAbRa'])
// console.log(capitalize('codewarriors')) //, ['CoDeWaRrIoRs', 'cOdEwArRiOrS'])

// // #129 Sort the odd ----

// function sortArray(array) {
//   // Return a sorted array.
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4])) //, [1, 3, 2, 8, 5, 4]);
// console.log(sortArray([5, 3, 1, 8, 0])) //, [1, 3, 5, 8, 0]);
// console.log(sortArray([])) //,[]);

// ////+ №130   Format a string of names like 'Bart, Lisa & Maggie'.
// function list(characters) {
//   const names = characters.map((x) => x.name)

//   if (names.length <= 1) {
//     return names.join('')
//   }

//   const str1 = names.slice(0, -1)
//   return `${str1.join(', ')} & ${names[names.lenght - 1]}`
// }

// // console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])) ///, 'Bart, Lisa & Maggie',
// // //"Must work with many names")
// // console.log(list([{ name: 'Bart' }, { name: 'Lisa' }])) //, 'Bart & Lisa',
// // //"Must work with two names")
// // console.log(list([{ name: 'Bart' }])) ///   , 'Bart', "Wrong output for a single name")
// // console.log(list([])) ///, '', "Must work with no names")

// //+ #131
// function proofread(str) {
//   return str
//     .toLowerCase()
//     .replace(/ie/g, 'ei')
//     .split('. ')
//     .map((newArr) => newArr[0].toUpperCase() + newArr.slice(1))
//     .join('. ')
// }
// console.log(proofread('ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT.')) //, "Their deceit was inconceivable. She seized the moment.");
// console.log(proofread('HIs nieghBOur wAs oVerwieGht.')) //, "His neighbour was overweight.");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
