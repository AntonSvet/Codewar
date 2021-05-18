//+ #213 IP Validation
// function isValidIP(str) {
//   const newStr = str.split('.')
//   if (str.includes(' ') || newStr.length !== 4) {
//     return false
//   }
//   return newStr.every(
//     (item) => String(Number(item)) === item && item >= 0 && item <= 255
//   )
// }
// console.log(isValidIP('12.255.56.1')) //, true)
// console.log(isValidIP('137.255.156.100')) //, true)
// console.log(isValidIP('12.34.56')) //, false);
// console.log(isValidIP('01.02.03.04')) //, false);
// console.log(isValidIP(' 1.2.3.4')) //, false);

// // #214 Super power frequency function  ------ Map!!!!
// function frequency(arr, options = {}) {
//   if (arr.length === 0) return arr
//   let map = new Map()
// }
// console.log(frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna'])) //, [["Anna", 2], ["Peter", 3], ["Rose", 1]]);
// console.log(frequency([1, 10, 12, 2, 1, 10, 2, 2, 1, 2])) //, [[1, 3], [2, 4], [10, 2], [12, 1]]);

// // #216 From..To..Series #2: from arr1 to arr2. Find the most same sum value of pairs  -----
// function findPair(arr1, arr2) {
//   const newArr = []
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i] + arr2[i])
//   }
//   console.log(newArr)
// }

// console.log(findPair([1, 2, 3, 4, 5], [9, 8, 0, 0, 0])) // , [[1,9],[2,8]])
// console.log(findPair([1, 2, 3, 4, 5], [0, 0, 0, 0, 0])) // , [])
// console.log(findPair([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])) // , [[1,5],[2,4],[3,3],[4,2],[5,1]])

//+ #217  Evaluating prefix Polish notation

// function calculate(expression) {
//   const arr = expression.split(' ')
//   const fn = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//     '*': (a, b) => a * b,
//     '/': (a, b) => a / b,
//   }
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (fn.hasOwnProperty(arr[i])) {
//       arr.splice(i, 3, fn[arr[i]](+arr[i + 1], +arr[i + 2]))
//     }
//   }
//   return Number(arr[0])
// }

// console.log(calculate('+ 3 5')) //, 8);
// console.log(calculate('* + 2 2 3')) //, 12);
// console.log(calculate('/ + 3 5 * 2 2')) //, 2);

// //+ #218 Convert A Hex String To RGB

// function hexStringToRGB(hexString) {
//   return {
//     r: parseInt(hexString.slice(1, 3), 16),
//     g: parseInt(hexString.slice(3, 5), 16),
//     b: parseInt(hexString.slice(5, 7), 16),
//   }
// }

// console.log(hexStringToRGB('#FF9933')) //, {r:255, g:153, b:51});

//+ #219 Run-length encoding

// function runLengthEncoding(str) {
//   const arr = []
//   let count = 1
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++
//     } else {
//       arr.push([count, str[i]])
//       count = 1
//     }
//   }
//   return arr
// }

// console.log(runLengthEncoding('abc')) //, [[1,'a'],[1,'b'],[1,'c']]);
// console.log(runLengthEncoding('aab')) //, [[2,'a'],[1,'b']]);

// // #220  Is a number prime?  -------

// function isPrime(num) {
//   if (num < 2) {
//     return false
//   }
//   if (num <= 3) {
//     return true
//   }
//   if (num < 2 || num % 2 == 0 || num % 3 == 0) {
//     return false
//   } else {
//     return true
//   }
// }

// console.log(isPrime(0)) //,  false, "0 is not prime");
// console.log(isPrime(1)) //,  false, "1 is not prime");
// console.log(isPrime(2)) //,  true, "2 is prime");
// console.log(isPrime(73)) //, true, "73 is prime");
// console.log(isPrime(75)) //, false, "75 is not prime");

// // //+ 221  Sum of Digits / Digital Root

// function digital_root(n) {
//   let a = String(n)
//     .split('')
//     .map(Number)
//     .reduce((acc, num) => acc + num, 0)
//   while (a > 9) {
//     a = String(a)
//       .split('')
//       .map(Number)
//       .reduce((acc, num) => acc + num, 0)
//   }
//   return a
// }

// console.log(digital_root(16)) //, 7 )
// console.log(digital_root(456)) //, 6 )

// // #222  Alphabetized  ------------------

// function alphabetized(s) {
//   const a = s.replace(/\s/g, '')
//   const b = a.split('').sort()
//   return b.join('')
// }

// console.log(alphabetized('The Holy Bible')) //, 'BbeehHilloTy')

///№ 223 Sort Strings by Most Contiguous Vowels -------

// function sortStringsByVowels(strings) {
//   const str = strings.sort()

//   const sortArr = str.sort((a, b) => b.length - a.length)
//   return sortArr
// }

// console.log(sortStringsByVowels(['aa', 'eee', 'oo', 'iiii'])) ///,["iiii","eee","aa","oo"]);
// console.log(sortStringsByVowels(['AIBRH', '', 'YOUNG', 'GREEEN'])) /// , ["GREEEN","AIBRH","YOUNG",""]);

// //+ #224 My Languages
// function myLanguages(results) {
//   const arr = []
//   for (const key in results) {
//     if (results[key] >= 60) {
//       arr.push(key)
//     }
//   }
//   return arr.sort((a, b) => results[b] - results[a])
// }

// console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 })) //, ["Ruby", "Python"])
// console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })) //, ["Dutch", "Greek", "Hindi"])
// console.log(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 })) //, [])

//+ #226 Double Sort
// function dbSort(a) {
//   const num = a.filter((item) => typeof item === 'number').sort((a, b) => a - b)
//   const str = a.filter((item) => typeof item === 'string').sort()
//   return [...num, ...str]
// }

// console.log(dbSort([6, 2, 3, 4, 5])) //, [2, 3, 4, 5, 6]);
// console.log(dbSort(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2])) //, [0,2,2,"Apple","Banana","Mango","Orange"]);
// console.log(dbSort(['C', 'W', 'W', 'W', 1, 2, 0])) //, [0,1,2,"C","W","W","W"]);

// #227 Sorting by bits
// function sortByBit(arr) {
// your solution here
// }

// //+ #228 Persistent Bugger.
// function persistence(num) {
//   if (num < 10) {
//     return 0
//   }
//   let a = String(num)
//     .split('')
//     .map(Number)
//     .reduce((acc, num) => acc * num)

//   count = 1
//   while (a > 9) {
//     a = String(a)
//       .split('')
//       .map(Number)
//       .reduce((acc, num) => acc * num)
//     count++
//   }
//   return count
// }
// console.log(persistence(39)) //,3);
// console.log(persistence(4)) //,0);
// console.log(persistence(25)) //,2);
// console.log(persistence(999)) //,4);

// // #229  String incrementer

// function incrementString(strng) {
//   const arr = Array.from(strng)
//   let num = ''
//   let str = ''
//   for (let i = 0; i < arr.length; i++) {
//     if (String(Number(arr[i])) === arr[i]) {
//       num += arr[i]
//     } else {
//       str += arr[i]
//     }
//   }

//   const result = str + (Math.abs(num) + 1)
//   return result
// }

// console.log(incrementString('foobar000')) //, "foobar001");
// console.log(incrementString('foo')) //, "foo1");
// console.log(incrementString('foobar001')) //, "foobar002");
// console.log(incrementString('foobar99')) //, "foobar100");
// console.log(incrementString('foobar099')) //, "foobar100");
// console.log(incrementString('')) //, "1");

// // #230 Maximum subarray sum
// var maxSequence = function (arr) {
//
// }
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) //, 6);
