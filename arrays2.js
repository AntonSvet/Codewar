//+ #115  Row Weights

function rowWeights(array) {
  let firstTeam = 0
  let secondTeam = 0
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      firstTeam += array[i]
    } else {
      secondTeam += array[i]
    }
  }
  return [firstTeam, secondTeam]
}

console.log(rowWeights([80])) //, [80, 0])
console.log(rowWeights([100, 50])) //, [100, 50])
console.log(rowWeights([0])) //, [0, 0])
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])) //, [207, 235])
console.log(rowWeights([0, 1, 0])) //, [0, 1])

// #116  Scrolling Text ---------

function scrollingText(text) {
  const newText = text.toUpperCase().split('')
  for (let i = 0; i < array.length; i++) {}
}

console.log(scrollingText('abc')) //, ['ABC', 'BCA', 'CAB'])

// #117 zipWith -----

function zipWith(fn, a0, a1) {
  return []
}

//+ #118 Beginner - Lost Without a Map
function maps(x) {
  return x.map((num) => num * 2)
}

console.log(maps([1, 2, 3])) //, [2, 4, 6]);

//+ #119 Array plus array
function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((a, b) => a + b)
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) //, 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])) //, -21);

//+ #120  Is every value in the array an array?

function arrCheck(value) {
  return value.every((item) => Array.isArray(item))
}
console.log(arrCheck([])) //, true);
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y'])) //, false);

//+ #121  Make a square box!

function box(n) {
  arr = []
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      arr.push('-'.repeat(n))
    } else {
      arr.push('-' + ' '.repeat(n - 2) + '-')
    }
  }
  return arr
}

console.log(box(5)) //, ['-----', '-   -', '-   -', '-   -', '-----'])
console.log(box(2)) //, ['--', '--'])
console.log(box(3)) //, ['---', '- -', '---'])

//+ #122  Magic Index
function findMagic(arr) {
  //return arr.find((item,ind) => item === ind) || -1;
  //return arr.findIndex((ind) => arr[ind] === ind) || -1
  let magicNum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      magicNum = arr[i]
    }
  }
  return magicNum > 0 ? magicNum : -1
}

//+ #123 Flatten and sort an array
function flattenAndSort(array) {
  /* const newArray = array.reduce((a, b) => a.concat(b), [])
    return newArray.sort((a, b) => a - b) */
  return [].concat(...array).sort((a, b) => a - b)
}
console.log(flattenAndSort([])) //, []);
console.log(flattenAndSort([[], []])) //, []);
console.log(flattenAndSort([[], [1]])) //, [1]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])) //, [1, 2, 3, 4, 5, 6, 100]);

//+ #124 Two Sum

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum([1, 2, 3], 4)) //.sort(numericalCompare)) //, [0,2]);
console.log(twoSum([1234, 5678, 9012], 14690)) //.sort(numericalCompare)) //, [1,2]);
console.log(twoSum([2, 2, 3], 4)) //.sort(numericalCompare)) //, [0,1]);

// #125  Length of missing array ------
function getLengthOfMissingArray(arrayOfArrays) {
  const s = arrayOfArrays.map((array) => array.length)
  const sort = s.sort((a, b) => a - b)
  return sort.find((item, i) => !sort.includes(i + 1))
}
console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
) //, 3);
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
) //, 2);
console.log(getLengthOfMissingArray([[null], [null, null, null]])) //, 2);
console.log(
  getLengthOfMissingArray([
    ['a', 'a', 'a'],
    ['a', 'a'],
    ['a', 'a', 'a', 'a'],
    ['a'],
    ['a', 'a', 'a', 'a', 'a', 'a'],
  ])
) //, 5);
// #126  Data Reverse  -------------
function dataReverse(data) {
  const s = []
  for (let i = 0; i < data.length; i) {
    let a = data.slice(i, i + 8)
    s.unshift(a)
  }
  //const t = s.reduce((acc, int) => acc.concat(int))
  console.log(s)
}

const data1 = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
]
//const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
console.log(dataReverse(data1)) //,data2)
const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]
//const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
console.log(dataReverse(data3)) //,data4)

// #127  Duplicate Encoder
function duplicateEncode(word) {
  const array = Array.from(word.toLowerCase())
  let a = ''
  for (let i = 0; i < array.length; i++) {
    if (array.includes(array[i])) {
      a += '('
    } else {
      a += ')'
    }
  }
  return a
}

console.log(duplicateEncode('din')) //,"(((");
console.log(duplicateEncode('recede')) //,"()()()");
console.log(duplicateEncode('Success')) //,")())())","should ignore case");
console.log(duplicateEncode('(( @')) //,"))((");

//+ #128 Alternate capitalization

function capitalize(s) {
  arrLetters = s.split('')

  let firstCap = ''
  let secondCap = ''

  for (let i = 0; i < arrLetters.length; i++) {
    if (i % 2 === 0) {
      firstCap += arrLetters[i].toUpperCase()
      secondCap += arrLetters[i]
    } else {
      firstCap += arrLetters[i]
      secondCap += arrLetters[i].toUpperCase()
    }
  }
  return [firstCap, secondCap]
}

console.log(capitalize('abracadabra')) //, ['AbRaCaDaBrA', 'aBrAcAdAbRa'])
console.log(capitalize('codewarriors')) //, ['CoDeWaRrIoRs', 'cOdEwArRiOrS'])

// #129 Sort the odd ----

function sortArray(array) {
  // Return a sorted array.
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) //, [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0])) //, [1, 3, 5, 8, 0]);
console.log(sortArray([])) //,[]);

////+ №130   Format a string of names like 'Bart, Lisa & Maggie'.
function list(characters) {
  const names = characters.map((x) => x.name)
  let result = ''
  if (names.length > 1) {
    str = names.slice(-1)
    str1 = names.slice(0, -1)
    result = str1.join(', ') + ` & ${str.join('')}`
  }

  return result || names.join('')
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])) ///, 'Bart, Lisa & Maggie',
//"Must work with many names")
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }])) //, 'Bart & Lisa',
//"Must work with two names")
console.log(list([{ name: 'Bart' }])) ///   , 'Bart', "Wrong output for a single name")
console.log(list([])) ///, '', "Must work with no names")

// #131
function proofread(str) {
  var newstr = str.toLowerCase().replace('ie', 'ei')
  console.log(newstr)
  // const arr = Array.from(str.toLowerCase())

  // const word = []
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === 'i' && arr[i + 1] === 'e') {
  //     word.push('ei')
  //   } else {
  //     word.push(arr[i])
  //   }
  // }
  // word[0] = word[0].toUpperCase()
  // console.log(word.join(''))
}

console.log(proofread('ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT.')) //, "Their deceit was inconceivable. She seized the moment.");
console.log(proofread('HIs nieghBOur wAs oVerwieGht.')) //, "His neighbour was overweight.");
console.log(proofread('SHe rEcieveD a pIegNor.')) //, "She received a peignor.");

// #132
// #133
// #134
// #135  Sort with a sorting array
function sort(initialArray, sortingArray) {}

console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3])) //, [1, 3, 2, 5, 4]);
