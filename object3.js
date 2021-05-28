// //+ #222  Alphabetized


// function alphabetized(s) {
//   return s
//     .replace(/\s/g, '')
//     .replace(/[^a-zA-Z]/g, '')
//     .split('')
//     .map((item, i) => [item, i])
//     .sort((a, b) => {
//       if (a[0].toUpperCase() === b[0].toUpperCase()) {
//         return a[1] < b[1] ? -1 : 1;
//       }
//       return a[0].toUpperCase() < b[0].toUpperCase() ? -1 : 1;
//     })
//     .map((item) => item[0])
//     .join('')
// }
// // [b B b B] → [[b0], [B1], [b2], [B3]] → SORT → [[b0], [B1], [b2], [B3]] →  [b B b B]


// console.log(alphabetized('The Holy Bible')) //, 'BbeehHilloTy')
// console.log(alphabetized('bBbB')) //, 'bBbB')

//+# 223 Sort Strings by Most Contiguous Vowels  

// function sortStringsByVowels(strings) {
//     return strings.sort((a, b) => maxVowels(b) - maxVowels(a));
// }

// function maxVowels(string) {

//     const vowels = 'aeiou';
//     // {
//     //     a: 1,
//     //     e: 1,
//     //     i: 1,
//     //     o: 1,
//     //     u: 1
//     // }
//     let maxVowels = 0
//     let count = 0
//     for (const letter of string.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             count++
//         } else {
//             count = 0
//         }
//         if (count > maxVowels) {
//             maxVowels = count
//         }
//     }
//     return maxVowels
// }

// console.log(sortStringsByVowels(['aa', 'eee', 'oo', 'iiii'])) ///,["iiii","eee","aa","oo"]);
// console.log(sortStringsByVowels(['AIBRH', '', 'YOUNG', 'GREEEN'])) /// , ["GREEEN","AIBRH","YOUNG",""]);

// //+ #224 My Languages
// function myLanguages(results) {
//   // const arr = []
//   // for (const key in results) {
//   //   if (results[key] >= 60) {
//   //     arr.push(key)
//   //   }
//   // }


//   return Object.keys(result)
//     .filter(key => result[key] >= 60)
//     .sort((a, b) => results[b] - results[a])
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

// //+ #227 Sorting by bits
// function sortByBit(arr) {
//   return arr.sort((a, b) => bits(a) === bits(b) ? (a < b ? -1 : 1) : (bits(a) < bits(b) ? -1 : 1))
// }

// function bits(number) {
//   return number
//     .toString(2)
//     .split('')
//     .filter(bit === '1')
//     .length;

//   let count = 0
//   for (const bit of number.toString(2)) {
//     if (bit === '1') {
//       count++
//     }
//   }
//   return count
// }

// //+ #228 Persistent Bugger.
// function persistence(num) {
//   if (num < 10) {
//     return 0;
//   }

//   const nextNum = String(num)
//       .split('')
//       .map(Number)
//       .reduce((acc, num) => acc * num, 1)

//   return persistence(nextNum) + 1
// }
// persistence(39) → persistence(27) + 1
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

//   return str + (zero > 0 ? '0'.repeat(zero) + (+num + 1) : +num + 1)
// }

// function incrementString(strng) {
//   const stringEndsWithNumber = /\d+$/;

//   if (!stringEndsWithNumber.test(strng)) {
//     return strng + '1';
//   }

//   return strng.replace(
//     stringEndsWithNumber,
//     match => String(+match + 1).padStart(match.length, '0'),
//   );
// }

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

//foobar00999
//result foobar001000
// console.log(incrementString('fo66obar00999')) //, "foobar01000");
// console.log(incrementString('foobar0000999')) //, "foobar0001000");
// console.log(incrementString('foobar000')) //, "foobar001");
// console.log(incrementString('foo')) //, "foo1");
// console.log(incrementString('foobar001')) //, "foobar002");
// console.log(incrementString('foobar01')) //, "foobar02");
// console.log(incrementString('foobar99')) //, "foobar100");
// console.log(incrementString('foobar099')) //, "foobar100");
// console.log(incrementString('')) //, "1");

//+ #230 Maximum subarray sum
// let q = 0;
// function maxSequence(arr) { // O(n²)  O(n)
//   let res = 0

//   for (let i = 0; i < arr.length; i++) {
//     let acc = 0
//     for (let j = i; j < arr.length; j++) {
//       acc += arr[j]
//       // console.log(++q);
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
  let teams = [];
  for (let i = 0; i < number; i++) {
    teams.push({ team: i, points: 0, diff: 0, goals: 0 });
  }

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
    teams[TeamA].points += pointA
    teams[TeamA].diff += GDa
    teams[TeamA].goals += GoalA
    teams[TeamB].points += pointB
    teams[TeamB].diff += GDb
    teams[TeamB].goals += GoalA



  }
  console.log(teams)
  teams = teams.sort((a, b) => b[0] - a[0] || b[1] - a[1] || b[2] - a[2])
  let res = []
  res[teams[0][3]] = 1
  for (let i = 1; i < teams.length; i++) {
    res[teams[i][3]] = i + 1
    if (teams[i - 1][0] == teams[i][0] && teams[i - 1][1] == teams[i][1] && teams[i - 1][2] == teams[i][2]) {
      res[teams[i][3]] = res[teams[i - 1][3]]
    }
  }
  return res
}



// const obj = {
//   a: 1,
//   b: 2,
// }

// // obj.a === 1

// obj[a] === ??? // a is not defined

// const key = 'b';

// obj[key] === 2






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