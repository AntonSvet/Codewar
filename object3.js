//+ #222  Alphabetized


// function alphabetized(s) {
//     return s
//       .replace(/\s/g, '')
//       .replace(/[^a-zA-Z]/g, '')
//       .split('')
//       .map((item, i) => [item, i])
//       .sort((a, b) => {
//         if (a[0].toUpperCase() === b[0].toUpperCase()) {
//           return a[1] < b[1] ? -1 : 1;
//         }
//         return a[0].toUpperCase() < b[0].toUpperCase() ? -1 : 1;
//       })
//       .map((item) => item[0])
//       .join('')
//   }
//   // [b B b B] → [[b0], [B1], [b2], [B3]] → SORT → [[b0], [B1], [b2], [B3]] →  [b B b B]


//   console.log(alphabetized('The Holy Bible')) //, 'BbeehHilloTy')
//   console.log(alphabetized('bBbB')) //, 'bBbB')

//+# 223 Sort Strings by Most Contiguous Vowels  

// function sortStringsByVowels(strings) {
//     return strings.sort((a, b) => maxVowels(b) - maxVowels(a));
// }

// function maxVowels(string) {

//     const vowels = {
//         a: 1,
//         e: 1,
//         i: 1,
//         o: 1,
//         u: 1
//     }
//     let maxVowels = 0
//     let count = 0
//     for (let i = 0; i < string.length; i++) {
//         if (vowels[string[i].toLowerCase()]) {
//             count++

//             if (count > maxVowels) {
//                 maxVowels = count
//             }
//         } else {
//             count = 0
//         }
//     }
//     return maxVowels
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

//+ #227 Sorting by bits
// function sortByBit(arr) {
//   return arr.sort((a, b) => bits(a) === bits(b) ? (a < b ? -1 : 1) : (bits(a) < bits(b) ? -1 : 1))
// }

// function bits(bit) {
//   bit = bit.toString(2)
//   let count = 0
//   for (let i = 0; i < bit.length; i++) {
//     if (+bit[i] === 1) {
//       count++
//     }
//   }
//   return count
// }

// //+ #228 Persistent Bugger.
// function persistence(num) {
//     if (num < 10) {
//         return 0
//     }
//     count = 0
//     while (num > 9) {
//         num = String(num)
//             .split('')
//             .map(Number)
//             .reduce((acc, num) => acc * num)
//         count++
//     }
//     return count
// }
// console.log(persistence(39)) //,3);
// console.log(persistence(4)) //,0);
// console.log(persistence(25)) //,2);
// console.log(persistence(999)) //,4);

//+ #229  String incrementer

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

//   const zero = num.length - (String((+num + 1)).length)

//   return str + (num.slice(0, 2) === '00' ? '0'.repeat(zero) + (+num + 1) : +num + 1)
// }
// //foobar00999
// //result foobar001000
// console.log(incrementString('foobar00999')) //, "foobar01000");
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
// #225 Sports League Table Ranking
function computeRanks(number, games) {
  const allGames = []
  for (const game of games) {
    let [TeamA, TeamB, GoalA, GoalB] = game
    let pointA = 0
    let pointB = 0
    let GDa = GoalA - GoalB
    let GDb = GoalB - GoalA
    if (GoalA > GoalB) {
      pointA += 2
    } else if (GoalB > GoalA) {
      pointB += 2
    } else {
      pointA++
      pointB++
    }
    allGames.push([TeamA, pointA, GDa])
    allGames.push([TeamB, pointB, GDb])
  }
  console.log(allGames)
  const table = {}
  allGames.forEach((item, idx) => {
    if (!(item[0] in table)) {
      table[item[0]] = [[item[1], item[2]]]
    } else {
      table[item[0]].push([item[1], item[2]])
    }
  })

  console.log(table)
  console.log(table[0])
  for (const key in table) {
    console.log(table[key])

  }
}






console.log(
  computeRanks(6, [
    [0, 5, 2, 2],
    [1, 4, 0, 2],
    [2, 3, 1, 2],
    [1, 5, 2, 2],
    [2, 0, 1, 1],
    [3, 4, 1, 1],
    [2, 5, 0, 2],
    [3, 1, 1, 1],
    [4, 0, 2, 0],
  ])
) //[4,4,6,3,1,2]);