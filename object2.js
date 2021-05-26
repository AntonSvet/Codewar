// //..+ #213 IP Validation
// function isValidIP(str) {
//   const newStr = str.split('.')
//   if (newStr.length !== 4) {
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

//+ #214 Super power frequency function  ------ Map!!!! sort!!!!!!!
// function frequency(arr, options = {}) {
//   const map = new Map()
//   const { criteria = (x) => x, compareTo = (a, b) => (a < b ? -1 : 1) } =
//     options
//   const groupArr = arr.map(criteria)

//   for (const item of groupArr) {
//     const prev = map.get(item) || 0
//     map.set(item, prev + 1)
//   }

//   return Array.from(map).sort((a, b) => compareTo(a[0], b[0], a[1], b[1]))
// }
// console.log(
//   frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna', 'Qq'], {
//     criteria: (name) => name.length,
//   })
// )
// // [[5, 3], [4, 3], [2, 1]]
// console.log(
//   frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna', 'Qq'], {})
// )
//, [["Anna", 2], ["Peter", 3], ["Rose", 1], ["Qq", 1]]);

// console.log(frequency([1, 10, 12, 2, 1, 10, 2, 2, 1, 2])) //, [[1, 3], [2, 4], [10, 2], [12, 1]]);

// https://github.com/tc39/proposal-upsert#just-update-if-present
// https://github.com/tc39/proposals

//+ #216 From..To..Series #2: from arr1 to arr2. Find the most same sum value of pairs  -----
// function findPair(arr1, arr2) {
//   const newArr = []
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push([arr1[i], arr2[i]])
//   }

//   const sum = newArr.map(([a, b]) => a + b)

//   const obj = {}
//   for (const num of sum) {
//     if (!(num in obj)) {
//       obj[num] = 1
//     } else {
//       obj[num]++
//     }

//     // obj[num] ??= 0;
//     // obj[num]++
//   }

//   const values = Math.max(...Object.values(obj))

//   const keys = Object.keys(obj).filter((value) => obj[value] === values)

//   const maxValue = Math.max(...keys)
//   const result = newArr.filter((x) => x[0] + x[1] === maxValue)

//   return result.length >= 2 ? result : []
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
//   // for (let i = arr.length - 1; i >= 0; i--) {
//   //   if (fn.hasOwnProperty(arr[i])) {
//   //     arr.splice(i, 3, fn[arr[i]](+arr[i + 1], +arr[i + 2]))
//   //   }
//   // }
//   // return Number(arr[0])

//   const numbers = []

//   while (arr.length > 0) {
//     const token = arr.pop()
//     if (token in fn) {
//       const x = numbers.pop()
//       const y = numbers.pop()

//       numbers.push(fn[token](x, y))
//     } else {
//       numbers.push(+token)
//     }
//   }

//   return +numbers[0]
// }

// // console.log(calculate('/ + 3 5 * 2 2')) //, 2);

// console.log(calculate('- 3 5')) //, -2);
// console.log(calculate('* + 2 2 3')) //, 12);

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
//     if (i < str.length - 1 && str[i] === str[i + 1]) {
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

//#220  Is a number prime?  ------- Random tests???

// function isPrime(num) {
//   // O(n) → O(sqrt(n))
//   if (num < 2) {
//     return false
//   }

//   let count = 0
//   for (let i = 1; i * i <= num; i++) {
//     if (num % i === 0) {
//       count += 2
//     }
//     if (i * i === num) {
//       count -= 1
//     }
//   }
//   return count === 2
// }

// console.log(isPrime(0)) //,  false, "0 is not prime");
// console.log(isPrime(1)) //,  false, "1 is not prime");
// console.log(isPrime(2)) //,  true, "2 is prime");
// console.log(isPrime(73)) //, true, "73 is prime");
// console.log(isPrime(75)) //, false, "75 is not prime");

// console.time('qwerty')
// console.log(isPrime(2 ** 31 - 1))
// console.timeEnd('qwerty')

// 1   2   4  5  10
// 100 50  25 20 10

// 100_000_000

// 20 * 5000000
// 5000000 * 20
// A * B === 100_000_000
// A <= B
// A === B → A² === 100_000_000 → A = 10_000

// // //+ 221  Sum of Digits / Digital Root

// function digital_root(n) {
//   let a = n
//   while (a > 9) {
//     a = String(a)
//       .split('')
//       .map(Number)
//       .reduce((acc, num) => acc + num, 0)
//   }
//   return a
// }

// function digital_root(n) {
//   if (n <= 9) {
//     return n
//   }
//   const a = String(n)
//     .split('')
//     .map(Number)
//     .reduce((acc, num) => acc + num, 0)

//   return digital_root(a)
// }

// console.log(digital_root(16)) //, 7 )
// console.log(digital_root(456)) //, 6 )

//+ #222  Alphabetized


function alphabetized(s) {
  return s
    .replace(/\s/g, '')
    .replace(/[^a-zA-Z]/g, '')
    .split('')
    .map((item, i) => [item, i])
    .sort((a, b) => {
      if (a[0].toUpperCase() === b[0].toUpperCase()) {
        return a[1] < b[1] ? -1 : 1;
      }
      return a[0].toUpperCase() < b[0].toUpperCase() ? -1 : 1;
    })
    .map((item) => item[0])
    .join('')
}
// [b B b B] → [[b0], [B1], [b2], [B3]] → SORT → [[b0], [B1], [b2], [B3]] →  [b B b B]



console.log(alphabetized('The Holy Bible')) //, 'BbeehHilloTy')
console.log(alphabetized('bBbB')) //, 'bBbB')

//# 223 Sort Strings by Most Contiguous Vowels -------

// function sortStringsByVowels(strings) {
// }
// function maxVowels() {

//   const vowels = {
//     a: 1,
//     e: 1,
//     i: 1,
//     o: 1,
//     u: 1
//   }
//   let max = 0
//   let count = 0
//   strings.forEach(letter => {
//     if (vowels[letter.toLowerCase()]) {
//       count++
//     }
//     if (count > max) {
//       max = count
//     } else {
//       count = 0
//     }
//   })
//   if (count > max) {
//     max = count
//   }
//   return max
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

// #225 Sports League Table Ranking
// function computeRanks(number, games) {
//   const allGames = []
//   for (const game of games) {
//     let [TeamA, TeamB, GoalA, GoalB] = game
//     let pointA = 0
//     let pointB = 0
//     let GDa = GoalA - GoalB
//     let GDb = GoalB - GoalA
//     if (GoalA > GoalB) {
//       pointA += 2
//     } else if (GoalB > GoalA) {
//       pointB += 2
//     } else {
//       pointA++
//       pointB++
//     }
//     allGames.push([TeamA, pointA, GDa])
//     allGames.push([TeamB, pointB, GDb])
//   }
//   console.log(allGames)
//   const table = {}

//   for (let i = 0; i < allGames.length; i++) {
//     for (let j = 1; j < allGames.length; j++) {
//       if (!(allGames[i][0] in table)) {
//         table[allGames[i][0]] =
//           allGames[
//             (allGames[i][1] + allGames[j][1], allGames[i][2] + allGames[j][2])
//           ]
//       }
//       // if (allGames[i][0] === allGames[j][0]) {
//       //   table.push([
//       //     allGames[i][0],
//       //     allGames[i][1] + allGames[j][1],
//       //     allGames[i][2] + allGames[j][2],
//       //   ])
//       // }
//     }
//   }
//   console.log(table)
// }

// console.log(
//   computeRanks(6, [
//     [0, 5, 2, 2],
//     [1, 4, 0, 2],
//     [2, 3, 1, 2],
//     [1, 5, 2, 2],
//     [2, 0, 1, 1],
//     [3, 4, 1, 1],
//     [2, 5, 0, 2],
//     [3, 1, 1, 1],
//     [4, 0, 2, 0],
//   ])
// ) //[4,4,6,3,1,2]);
//+ #226 Double Sort
// function dbSort(a) {
//   const num = a.filter((item) => typeof item === 'number').sort((a, b) => a - b)
//   const str = a.filter((item) => typeof item === 'string').sort()
//   return [...num, ...str]
// }

// console.log(dbSort([6, 2, 3, 4, 5])) //, [2, 3, 4, 5, 6]);
// console.log(dbSort(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2])) //, [0,2,2,"Apple","Banana","Mango","Orange"]);
// console.log(dbSort(['C', 'W', 'W', 'W', 1, 2, 0])) //, [0,1,2,"C","W","W","W"]);

// // #227 Sorting by bits
// function sortByBit(arr) {

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

//   const result = str + (num.slice(0, 2) === '00' ? '00' + (+num + 1) : +num + 1)
//   return result
// }

// console.log(incrementString('foobar000')) //, "foobar001");
// console.log(incrementString('foo')) //, "foo1");
// console.log(incrementString('foobar001')) //, "foobar002");
// console.log(incrementString('foobar99')) //, "foobar100");
// console.log(incrementString('foobar099')) //, "foobar100");
// console.log(incrementString('')) //, "1");

//+ #230 Maximum subarray sum
// function maxSequence(arr) {
//   let res = 0

//   for (let i = 0; i < arr.length; i++) {
//     let acc = 0
//     for (let j = i; j < arr.length; j++) {
//       acc += arr[j]
//       if (acc > res) {
//         res = acc
//       }
//     }
//   }
//   return res
// }
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) //, 6);
