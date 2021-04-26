/////№5   Credit Card Mask
function maskify(cc) {
  if (cc.length < 5) {
    return cc
  }

  return '#'.repeat(cc.length - 4) + cc.slice(-4)
}

console.log(maskify('4556364607935616')) // '############5616');
console.log(maskify('1')) // '1');
console.log(maskify('11111')) //'#1111');
console.log(maskify('1111')) //'1111');
console.log(maskify('')) //'#1111');

//// #109 Array.diff
function arrayDiff(a, b) {
  return a.filter((item) => b.includes(item))
}

// ;[9, 2, 1, 3].indexOf(1) // 2
// ;[9, 2, 1, 3].includes(1) // true

// console.log(arrayDiff([], [4, 5])) //, [], 'a was [], b was [4,5]')
// console.log(arrayDiff([3, 4], [3])) //, [4], 'a was [3,4], b was [3]')
// console.log(arrayDiff([1, 8, 2], [])) //, [1, 8, 2], 'a was [1,8,2], b was []')
// console.log(arrayDiff([1, 2, 3], [1, 2])) //, [3], 'a was [1,2,3], b was [1,2]')

//// №113 Homogenous arrays

// return (
//   array.filter((num) => typeof num === typeof array[0]).length === array.length
// )
function isHomogenous(array) {
  return array.every((num) => typeof num === typeof array[0])
}

function filterHomogenous(arrays) {
  return arrays.filter((item) => item.length > 0 && isHomogenous(item))

  // X = A ? B : false
  // X = A && B

  // A       B        X
  // false   false    false
  // false   true     false
  // true    false    false
  // true    true     true
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])) //, [[1, 5, 4], ['b']]);
console.log(
  filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []])
) ///, [[123, 234, 432], ['', 'abc'], [''], ['', '1']]);

//// №130   Format a string of names like 'Bart, Lisa & Maggie'.
function list(characters) {
  const names = characters.map((x) => x.name)

  if (names.length === 0) return ''
  if (names.length === 1) return `${names[0]}`
  if (names.length === 2) return `${names[0]} & ${names[1]}`
  if (names.length === 3) return `${names[0]}, ${names[1]} & ${names[2]}`
  if (names.length === 4)
    return `${names[0]}, ${names[1]}, ${names[2]} & ${names[3]}`
  if (names.length === 5)
    return `${names[0]}, ${names[1]}, ${names[2]}, ${names[3]} & ${names[4]}`
}

console.log(
  list([
    { name: 'Bart' },
    { name: 'Lisa' },
    { name: 'Maggie' },
    { name: 'Homer' },
    { name: 'Marge' },
  ])
) ///, 'Bart, Lisa, Maggie, Homer & Marge',
//"Must work with many names")
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])) ///, 'Bart, Lisa & Maggie',
//"Must work with many names")
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }])) //, 'Bart & Lisa',
//"Must work with two names")
console.log(list([{ name: 'Bart' }])) ///   , 'Bart', "Wrong output for a single name")
console.log(list([])) ///, '', "Must work with no names")

///№ 209 Coding Meetup #2 - Higher-Order Functions Series - Greet developers

const list1 = [
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
]

function greetDevelopers(list) {
  return list.map((item) => {
    return {
      ...item,
      greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`,
    }
  })
}

console.log(greetDevelopers(list1))

///№ 223 Sort Strings by Most Contiguous Vowels

function sortStringsByVowels(strings) {
  const str = strings.sort()

  const sortArr = str.sort(function (a, b) {
    return b.length - a.length
  })
  return sortArr
}

// Sort Strings by Most Contiguous Vowels

console.log(sortStringsByVowels(['aa', 'eee', 'oo', 'iiii'])) ///,["iiii","eee","aa","oo"]);
console.log(sortStringsByVowels(['a', 'e', 'ii', 'ooo', 'u'])) ///,["ooo","ii","a","e","u"]);
console.log(sortStringsByVowels(['ioue', 'ee', 'uoiea'])) /// , ["uoiea", "ioue","ee"]);
console.log(sortStringsByVowels(['high', 'day', 'boot'])) /// , ["boot","high","day"]);
console.log(sortStringsByVowels(['none', 'uuu', 'Yuuuge!!'])) /// , ["uuu","Yuuuge!!","none"]);
console.log(sortStringsByVowels(['AIBRH', '', 'YOUNG', 'GREEEN'])) /// , ["GREEEN","AIBRH","YOUNG",""]);
/*
//№301 Implementing Array.prototype.groupBy method
Array.prototype.groupBy = function (fn) {
  // Your solution
}

// №405 Function composition

function compose() {
  // Your solution
}

console.log(compose(multTwo, addOne)(5), 12, 'compose two functions')
console.log(
  compose(addOne, multTwo, addOne, addOne)(2),
  9,
  'compose four functions'
)
console.log(compose(addOne)(3), 4, 'compose one function')
console.log(compose()(10), 10, 'compose no functions')

// № 411 Stringing me along
function createMessage(prev) {
  return (next) =>
    next === undefined ? prev : createMessage(`${prev} ${next}`)
}
console.log(
  createMessage('Hello')('World!')('how')('are')('you?')(),
  'Hello World! how are you?'
)

// № 416 Concatenating functions

// just a small amount of possible functions to start testing with.
var addOne = function (e) {
  return e + 1
}
var square = function (e) {
  return e * e
}

// Extend the Function prototype with a method pipe

// №506 Flatten a Nested Map
function flattenMap(map) {
  // Add your code here
}
*/
