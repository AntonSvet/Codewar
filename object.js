//+ #200 Complementary DNA
// function DNAStrand(dna) {
//   const obj = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   }

//   let newStr = ''

//   for (const letter of dna) {
//     newStr += obj[letter]
//   }
//   return newStr
// }
// //"A" = "T"   "C" = "G"
// console.log(DNAStrand('TATGC')) //,"TAACG","String ATTGC is");
// console.log(DNAStrand('GTAT')) //,"CATA","String GTAT is");

//+ #201 Convert the score
// function scoreboard(string) {
//   const obj = {
//     nil: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   }

//   return string
//     .split(' ')
//     .filter((item) => obj.hasOwnProperty(item))
//     .map((item) => obj[item])
//   //   //const score = []

//   //   for (let i = 0; i < newStr.length; i++) {
//   //     if (obj.hasOwnProperty(newStr[i])) {
//   //       score.push(obj[newStr[i]])
//   //     }
//   //   }
//   //   return score
// }
// console.log(scoreboard('The score is four nil')) //, [4,0], "Should return: [4,0]");
// console.log(scoreboard('new score: two three')) //, [2,3], "Should return: [2,3]");

//+ # 202 The Office I - Outed
// function outed(meet, boss) {
//   const values = Object.values()
//   const totalScore = values.reduce((a, b) => a + b, 0)

//   return (totalScore + meet[boss]) / values.length > 5
//     ? 'Nice Work Champ!'
//     : 'Get Out Now!'
// }

// console.log(
//   outed(
//     {
//       tim: 0,
//       jim: 2,
//       randy: 0,
//       sandy: 7,
//       andy: 0,
//       katie: 5,
//       laura: 1,
//       saajid: 2,
//       alex: 3,
//       john: 2,
//       mr: 0,
//     },
//     'laura'
//   )
// ) //, 'Get Out Now!');

//+ #203 Who's Online?

// const whosOnline = (friends) => {
//   const online = []
//   const offline = []
//   const away = []

//   friends.forEach((arr) => {
//     if (arr.status === 'online' && arr.lastActivity <= 10) {
//       online.push(arr.username)
//     } else if (arr.status === 'offline') {
//       offline.push(arr.username)
//     } else {
//       away.push(arr.username)
//     }
//   })
//   // if (online.length > 0 && offline.length > 0 && away.length > 0) {
//   //   return { online, offline, away }
//   // }

//   // if (online.length > 0 && away.length > 0) {
//   //   return { online, away }
//   // }

//   // if (online.length > 0 && offline.length > 0) {
//   //   return { online, offline }
//   // }
//   // if (offline.length > 0 && away.length > 0) {
//   //   return { offline, away }
//   // }
//   // return {}

//   const obj = { online, offline, away }
//   // const filteredObj = {};

//   // for(const [key, value] of Object.entries(obj)) {
//   //   if(value.length > 0) {
//   //     filteredObj[key] = value;
//   //   }
//   // }

//   // for(const key in obj) {
//   //   if(obj[key].length > 0) {
//   //     filteredObj[key] = obj[key];
//   //   }
//   // }

//   return Object.fromEntries(
//     Object.entries(obj).filter(([k, v]) => v.length > 0)
//   )

//   // return (
//   //   Object.entries(obj).filter(([k, v]) => v.length > 0) |> Object.fromEntries
//   // )
// }
// // const a = {
// //   online: ['David'],
// //   offline: ['Lucy'],
// //   away: ['Bob'],
// // }

// const friends = [
//   {
//     username: 'David',
//     status: 'online',
//     lastActivity: 10,
//   },
// {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22,
// },
// {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104,
// },
// ]
// console.log(whosOnline(friends))

//+ #204 Where my anagrams at?

// function anagrams(word, words) {
//   // word.length === N  words.length === K ?????O(K ?? N ?? log(N))
//   //   const newWords = []
//   //   const newWord = word.split('').sort().join('') // O(N + N ?? log(N) + N) === O(N ?? log(N))
//   //   for (let str of words) {
//   //     // O(K)
//   //     const newStr = str.split('').sort().join('') // O(N ?? log(N))
//   //     if (newStr === newWord) {
//   //       newWords.push(str)
//   //     }
//   //   }

//   return words.filter((item) => isAnagrams(word, item))
// }

// function isAnagrams(w1, w2) {
//   const obj = {}
//   for (const letter of w1) {
//     if (!(letter in obj)) {
//       obj[letter] = 0
//     }
//     // obj[letter] ??= 0
//     // obj[letter] = obj[letter] || 0
//     obj[letter]++
//   }
//   for (const letter of w2) {
//     obj[letter]--
//   }
//   return Object.values(obj).every((item) => item === 0)
// }

//console.log(isAnagrams('racer', 'rreac')) // { a: 1, c: 1, e: 1, r: 2 }

// ??O(K ?? N)

// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//+  #205 Make a function that does arithmetic!

// const fn = {
//   add: (a, b) => a + b,
//   subtract: (a, b) => a - b,
//   multiply: (a, b) => a * b,
//   divide: (a, b) => a / b,
// }

// function arithmetic(a, b, operator) {
//   return fn[operator](a, b)

//   switch (operator) {
//     case 'add':
//       return a + b
//     case 'subtract':
//       return a - b
//     case 'multiply':
//       return a * b
//     case 'divide':
//       return a / b
//   }
// }
// console.log(arithmetic(5, 2, 'multiply')) //, 10, "'multiply' should return a multiplied by b!");
// console.log(arithmetic(8, 2, 'divide')) //, 4, "'divide' should return a divided by b!");

//+ #206 Pluck

// function pluck(objs, name) {
//   const arr = []
//   for (const item of objs) {
//     arr.push(item[name])
//   }
//   return objs.map(item => item[name])
// }
// console.log(pluck([{ a: 1 }, { a: 2 }], 'a')) //, [1,2])
// console.log(pluck([{ a: 1 }, { a: 2 }, { b: 2 }], 'a')) //, [1,2])

//+ #207 Remove duplicate words

//const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ') ?????

// https://twitter.com/maxsinyakov/following
// https://www.youtube.com/watch?v=LYbtR9vQkiI

// function removeDuplicateWords(s) {
//   const arr = s.split(' ')
//   // const obj = {}
//   // const result = []
//   const set = new Set(arr)
//   // for (const item of arr) {
//   // if (!(item in obj)) {
//   //   obj[item] = 0
//   //   result.push(item)
//   // }
//   // set.add(item)
//   // }
//   return Array.from(set).join('') //Object.keys(obj).join(' ')
// }

// console.log(
//   removeDuplicateWords(
//     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta 123'
//   )
// ) //, 'alpha beta gamma delta')

// //+ #208 Find the unique number
// function findUnique(numbers) {
//   return numbers.find(
//     (item) => numbers.indexOf(item) === numbers.lastIndexOf(item)
//   )
// }

// function findUnique(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i]))
//       return numbers[i]
//   }
// }

// function findUnique(numbers) {
//   obj = {}
//   for (const num of numbers) {
//     if (!(num in obj)) {
//       obj[num] = 1
//     } else {
//       obj[num]++
//     }
//   }
//   for (const key in obj) {
//     if (obj[key] === 1) return Number(key)
//   }
// }

// console.log(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2])) //, 1);
// console.log(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1])) //, 4);
// console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9])) //, 9);

// //+ #209 Coding Meetup #2 - Higher-Order Functions Series - Greet developers
// function greetDevelopers(list) {
//   return list.map((item) => ({
//     ...item,
//     greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`,
//   }))
// }

// //+  #210 Convert Hash To An Array
// function convertHashToArray(hash) {
//   return Object.entries(hash).sort((a, b) => (a[0] < b[0] ? -1 : 1))
//   return Object.keys(hash).sort().map(k => [k, hash[k]]);
// }
// console.log(convertHashToArray({ name: 'Jeremy' })) //,[["name", "Jeremy"]]);
// console.log(convertHashToArray({ name: 'Jeremy', age: 24 })) //,[["age", 24], ["name", "Jeremy"]]);
// console.log(
//   convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' })
// ) //,[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
// console.log(convertHashToArray({ product: 'CodeWars', powerLevelOver: 9000 })) //,[["powerLevelOver", 9000], ["product", "CodeWars"]]);
// console.log(convertHashToArray({})) //,[]);

// console.log(['a,b,c,d', 'a,b,c'].sort())

// const o = {
//   'a,b,c,d': 'asdfghj',
//   'a,b,c': 'qwertyui',
// }

// console.log(convertHashToArray(o))

// const x = ['????????', '????????', '????????', '????????']

// console.log(x.sort((a, b) => a.localeCompare(b, 'ru')))

// [ [ 'a,b,c,d', 'asdfghj' ], [ 'a,b,c', 'qwertyui' ] ]
// 'a,b,c,d,asdfghj' 'a,b,c,qwertyui'
// [1, 2, 3].toString() === "1,2,3"

//+ #211 Kebabize
// function kebabize(str) {
//   // const newStr = str.replace(/[0-9]/g, '')
//   // let newLine = ''

//   // for (let i = 0; i < newStr.length; i++) {
//   //   if (newStr[i] === newStr[i].toUpperCase()) {
//   //     newLine += '-' + newStr[i].toLowerCase()
//   //   } else {
//   //     newLine += newStr[i]
//   //   }
//   // }
//   // return newLine[0] === '-' ? newLine.slice(1) : newLine

//   return str
//     .replace(/[^a-z]/gi, '')
//     .replace(/[A-Z]/g, (x) => '-' + x.toLowerCase())
//     .replace(/^-/, '')
// }

// console.log(kebabize('MyCamelCasedString')) //, 'my-camel-cased-string');
// console.log(kebabize('myCamelHas3Humps')) //, 'my-camel-has-humps')

//+ #212  Word a10n (abbreviation)

// function abbreviate(string) {
//   // if (string.includes('-')) {
//   //   return string
//   //     .split('-')
//   //     .map((item) =>
//   //       item.length === 3
//   //         ? item
//   //         : item[0] + (item.length - 2) + item[item.length - 1]
//   //     )
//   //     .join('-')
//   // } else {
//   //   return string.length === 3
//   //     ? string
//   //     : string[0] + (string.length - 2) + string[string.length - 1]
//   // }

//   // return string.replace(/[a-z]+/gi, (string) =>
//   //   string.length < 4
//   //     ? string
//   //     : string[0] + (string.length - 2) + string[string.length - 1]
//   // )

//   return string.replace(
//     /[a-z]{4,}/gi,
//     (string) => string[0] + (string.length - 2) + string[string.length - 1]
//   )
// }

// // console.log(abbreviate('internationalization')) //, "i18n");
// // console.log(abbreviate('acc')) //, "a11y");
// console.log(
//   abbreviate('You need, need not want, to complete this code-wars mission')
// ) //, "You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n");
// console.log(abbreviate('elephant-ride')) //, "e6t-r2e");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

///??? 223 Sort Strings by Most Contiguous Vowels -------

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
