// //+ #200 Complementary DNA
// function DNAStrand(dna) {
//   const obj = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   }

//   let newStr = ''

//   for (let i = 0; i < dna.length; i++) {
//     newStr += obj[dna[i]]
//   }
//   return newStr
// }
// //"A" = "T"   "C" = "G"
// console.log(DNAStrand('ATTGC')) //,"TAACG","String ATTGC is");
// console.log(DNAStrand('GTAT')) //,"CATA","String GTAT is");

// //+ #201 Convert the score
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

//   const newStr = string.split(' ')
//   const score = []

//   for (let i = 0; i < newStr.length; i++) {
//     if (obj.hasOwnProperty(newStr[i])) {
//       score.push(obj[newStr[i]])
//     }
//   }
//   return score
// }
// console.log(scoreboard('The score is four nil')) //, [4,0], "Should return: [4,0]");
// console.log(scoreboard('new score: two three')) //, [2,3], "Should return: [2,3]");

// //+ # 202 The Office I - Outed
// function outed(meet, boss) {
//   const len = Object.keys(meet).length
//   let happiness = 0
//   for (const key in meet) {
//     if (key === boss) {
//       happiness += meet[key] * 2
//     } else {
//       happiness += meet[key]
//     }
//   }
// return happiness / len > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
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
//     if (arr.status === 'online' && arr.lastActivity < 11) {
//       online.push(arr.username)
//     } else if (arr.status === 'offline') {
//       offline.push(arr.username)
//     } else {
//       away.push(arr.username)
//     }
//   })
//   if (online.length > 0 && offline.length > 0 && away.length > 0) {
//     return { online, offline, away }
//   }

//   if (online.length > 0 && away.length > 0) {
//     return { online, away }
//   }

//   if (online.length > 0 && offline.length > 0) {
//     return { online, offline }
//   }
//   if (offline.length > 0 && away.length > 0) {
//     return { offline, away }
//   }
//   return {}
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
//   {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22,
//   },
//   {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104,
//   },
// ]
// console.log(whosOnline(friends))

// //+ #204 Where my anagrams at?

// function anagrams(word, words) {
//   const newWords = []
//   for (let str of words) {
//     const newWord = word.split('').sort().join('')
//     const newStr = str.split('').sort().join('')
//     if (newStr === newWord) {
//       newWords.push(str)
//     }
//   }
//   return newWords
// }
// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))

// //+  #205 Make a function that does arithmetic!

// function arithmetic(a, b, operator) {
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
// console.log(arithmetic(5, 2, "multiply")) //, 10, "'multiply' should return a multiplied by b!");
// console.log(arithmetic(8, 2, "divide")) //, 4, "'divide' should return a divided by b!");

// //+ #206 Pluck

// function pluck(objs, name) {
//   const arr = []
//   for (let i = 0; i < objs.length; i++) {
//     arr.push(objs[i][name])
//   }
//   return arr
// }

// console.log(pluck([{ a: 1 }, { a: 2 }], 'a')) //, [1,2])
// console.log(pluck([{ a: 1 }, { a: 2 }, { b: 2 }], 'a')) //, [1,2])

// #207 Remove duplicate words   ------

function removeDuplicateWords(s) {
  const arr = s.split(' ')
  const newArr = []
  for (let i = 0; i < s.length; i++) {
    if (arr[i + 1] === arr[i]) {
      newArr.push(arr[i])
    }
  }
  return newArr.join(' ')
}

console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
) //, 'alpha beta gamma delta')

// #208 Find the unique number -----------
function findUnique(numbers) {
  return numbers.find(
    (item) => numbers.indexOf(item) === numbers.lastIndexOf(item)
  )
}

function findUnique(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i]))
      return numbers[i]
  }
}
console.log(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2])) //, 1);
console.log(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1])) //, 4);
console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9])) //, 9);

//+ #209 Coding Meetup #2 - Higher-Order Functions Series - Greet developers
// function greetDevelopers(list) {
//   return list.map((item) => {
//     return {
//       ...item,
//       greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`,
//     }
//   })
// }

// //  #210 Convert Hash To An Array
// function convertHashToArray(hash) {
//   return Object.entries(hash).sort()
// }
// console.log(convertHashToArray({ name: 'Jeremy' })) //,[["name", "Jeremy"]]);
// console.log(convertHashToArray({ name: 'Jeremy', age: 24 })) //,[["age", 24], ["name", "Jeremy"]]);
// console.log(
//   convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' })
// ) //,[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
// console.log(convertHashToArray({ product: 'CodeWars', powerLevelOver: 9000 })) //,[["powerLevelOver", 9000], ["product", "CodeWars"]]);
// console.log(convertHashToArray({})) //,[]);

// #211 Kebabize
function kebabize(str) {
  let newLine = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newLine += '-' + str[i].toLowerCase()
    } else {
      newLine += str[i]
    }
  }
  return newLine
}

console.log(kebabize('myCamelCasedString')) //, 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps')) //, 'my-camel-has-humps')
