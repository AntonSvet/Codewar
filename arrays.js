//#100 Sum of positive

function positiveSum(arr) {
  return arr.filter((x) => x > 0).reduce((a, b) => a + b, 0)
}
console.log(positiveSum([1, 2, 3, 4, 5])) //,15);
console.log(positiveSum([1, -2, 3, 4, 5])) //,13);
console.log(positiveSum([])) //,0);
console.log(positiveSum([-1, -2, -3, -4, -5])) //,0);
console.log(positiveSum([-1, 2, 3, 4, -5])) //,9);

//#101   Shortest Word

function findShort(s) {
  const array = s.split(' ')
  let word = array[0]
  for (let i = 1; i < array.length; i++) {
    if (word.length > array[i].length) {
      word = array[i]
    }
  }
  return word.length
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps')) //, 3);

//#102 List Filtering

function filter_list(l) {
  return l.filter((num) => typeof num === 'number')
}
console.log(filter_list([1, 2, 'a', 'b'])) //,[1,2])
console.log(filter_list([1, 'a', 'b', 0, 15])) //,[1,0,15])

// #103   Square Every Digit
function squareDigits(num) {
  //const numArr = num.toString().split('')
  return parseInt(
    num
      .toString()
      .split('')
      .map((num) => num ** 2)
      .join('')
  )
}
console.log(squareDigits(3212)) //, 9414);
console.log(squareDigits(2112)) //, 4114);
console.log(squareDigits(0)) //, 0);

//#104 Build a square
function generateShape(int) {
  let answer = []
  for (let i = 0; i < int; i++) {
    answer.push('+'.repeat(int))
  }
  return answer.join('\n')
}

console.log(
  generateShape(8),
  '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'
)
// #105 Friend or Foe?
function friend(friends) {
  return friends.filter((name) => name.length === 4)
}
console.log(friend(['Ryan', 'Kieran', 'Mark'])) //, ["Ryan", "Mark"]);
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])) //, ["Ryan"]);

// #106 Vowel Count

function getCount(str) {
  const vowels = 'aeiou'
  return str.split('').filter((vowel) => vowels.includes(vowel)).length
}

console.log(getCount('abracadabra')) //, 5)

// #107 Playing with digits //no result

function digPow(n, p) {}

console.log(digPow(89, 1)) //, 1)
console.log(digPow(92, 1)) //, -1)
console.log(digPow(46288, 3)) //, 51)

digPow(89, 1) //should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) //should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) //should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) //should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

//#108   Smallest value of an array

function min(arr, toReturn) {
  let value = arr[0]
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    if (value > arr[i]) {
      index = i
      value = arr[i]
    }
  }
  return toReturn === 'value' ? value : index
}

console.log(min([1, 2, 3, 4, 5], 'value')) //, 1)
console.log(min([1, 2, 3, 4, 5], 'index')) //, 0)

//// #109 Array.diff
function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item))
  //return a.filter((item) => b.indexOf(item) === -1)
}

// ;[9, 2, 1, 3].indexOf(1) // 2
// ;[9, 2, 1, 3].includes(1) // true

console.log(arrayDiff([3, 4], [3])) //, [4], 'a was [3,4], b was [3]')
console.log(arrayDiff([1, 2, 3], [1, 2])) //, [3], 'a was [1,2,3], b was [1,2]')

// #110 Find the capitals
const capitals = function (word) {
  const letters = word.split('')
  const index = []
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toUpperCase()) {
      index.push(i)
    }
  }
  return index
}

console.log(capitals('CodEWaRs')) // , [0,3,4,6] );

// #111  Insert dashes

function insertDash(num) {
  const numArr = num.toString().split('')
  const dashArr = []
  for (let i = 0; i < numArr.length; i++) {
    dashArr.push(numArr[i])
    if (numArr[i] % 2 === 1 && numArr[i + 1] % 2 === 1) {
      dashArr.push('-')
    }
  }
  return dashArr.join('')
}
console.log(insertDash(454793)) //,'4547-9-3');
console.log(insertDash(123456)) //,'123456');
console.log(insertDash(1003567)) //,'1003-567');

////#112  Count the smiley faces!

function countSmileys(arr) {
  const smiles = [
    ':D',
    ';D',
    ';)',
    ':)',
    ':-D',
    ';-D',
    ';-)',
    ':-)',
    ':~D',
    ';~D',
    ';~)',
    ':~)',
  ]
  const newArr = arr.filter((smile) => smiles.includes(smile))
  return newArr.length
}

console.log(countSmileys([])) //, 0)
console.log(countSmileys([':D', ':~)', ';~D', ':)'])) //, 4)
console.log(countSmileys([':)', ':(', ':D', ':O', ':;'])) //, 2)
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) //, 1)

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

// #114  Lottery Ticket
function bingo(ticket, win) {
  const [a, b, c] = ticket
  let counter = 0
  const tic = ticket.map((item) => {
    for (let i = 0; i < item.length; i++) {
      if (item[0].charCodeAt(i) === item[1]) {
        return counter++
      }
    }
  })
  return counter >= win ? 'Winner!' : 'Loser!'
}
console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    2
  )
) //, 'Loser!');
console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    1
  )
) //, 'Winner!');
console.log(
  bingo(
    [
      ['HGTYRE', 74],
      ['BE', 66],
      ['JKTY', 74],
    ],
    3
  )
) //, 'Loser!');

// #115  Row Weights

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

// #116  Scrolling Text

function scrollingText(text) {
  const newText = text.toUpperCase().split('')
  for (let i = 0; i < array.length; i++) {}
}

console.log(scrollingText('abc')) //, ['ABC', 'BCA', 'CAB'])

// #117 zipWith

function zipWith(fn, a0, a1) {
  return []
}

// #118 Beginner - Lost Without a Map
function maps(x) {
  return x.map((num) => num * 2)
}

console.log(maps([1, 2, 3])) //, [2, 4, 6]);

// #119 Array plus array
function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((a, b) => a + b)
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) //, 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])) //, -21);

// #120  Is every value in the array an array?

function arrCheck(value) {
  return value.every((item) => Array.isArray(item))
}
console.log(arrCheck([])) //, true);
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y'])) //, false);

// #121  Make a square box!

function box(n) {
  arr = []
  for (let i = 0; i < n; i++) {
    arr.push('-'.repeat(n))
  }
  console.log(arr)
}

console.log(box(5)) //, ['-----', '-   -', '-   -', '-   -', '-----'])
console.log(box(2)) //, ['--', '--'])
console.log(box(3)) //, ['---', '- -', '---'])
