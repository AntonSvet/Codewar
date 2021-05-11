//+ #129 Sort the odd ???

// function sortArray(array) {
//   const odds = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b) //////// (num % 2 === 1) НЕ проходит тесты с отрицательными числами.
//   console.log('...', odds)
//   let i = 0
//   const newArr = array.map((item) => {
//     if (item % 2 === 0) {
//       return item
//     } else {
//       const tmp = odds[i]
//       i++
//       return tmp
//     }
//   })
//   return newArr
//   // [5, 3, 2, 8, 1, 4]
//   // [1,3,5]
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4])) //, [1, 3, 2, 8, 5, 4]);
// console.log(sortArray([5, 3, 1, 8, 0])) //, [1, 3, 5, 8, 0]);
// console.log(sortArray([])) //,[]);

//+#132 Simple Fun #79: Delete a Digit
// function deleteDigit(n) {
//   const str = n.toString()
//   const numbers = []
//   for (let i = 0; i < str.length; i++) {
//     numbers.push(+(str.slice(0, i) + str.slice(i + 1)));
//   }
//   // const numbers = Array.from(str, (_, i) => str.slice(0, i) + str.slice(i + 1));
//   return Math.max(...number);
// }

// "1234567"

// [1, 2] + [3, 4] === 1234 // arr.toString() === arr.join(',')
// "1,2" + "3,4" === "1,23,4"

// const qwe = {x : 1} + {z : 4} // "[object Object][object Object]"

// console.log('>>>', deleteDigit(1234567))
// console.log(deleteDigit(152)) //,52)

// console.log(deleteDigit(1001)) //,101)

//  console.log(deleteDigit(10)) //,1)

//+ #133  Equal Sides Of An Array
// function findEvenIndex(arr) { // O(n²)
//   let l = 0;
//   let r = arr.reduce((acc, num) => acc + num, 0);
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr.slice(0, i).reduce((acc, num) => acc + num, 0) ===
//       arr.slice(i + 1).reduce((acc, num) => acc + num, 0)
//     ) {
//       return i
//     }
//   }
//   return -1
// }

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])) //,3, "The array was: [1,2,3,4,3,2,1] \n");
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])) //,1, "The array was: [1,100,50,-51,1,1] \n");
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])) //,-1, "The array was: [1,2,3,4,5,6] \n");
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])) //,3, "The array was: [20,10,30,10,10,15,35] \n");
// console.log(findEvenIndex([20, 10, 30, 10, 5, 5, 5, 5])) //,2, "The array was: [20,10,30,10,10,15,35] \n");

// //+ #134 Easy Balance Checking
// function balance(book) {
//   const [firstLine, ...arr] = book
//     .replace(/[^a-zA-Z0-9\.\s]/g, '')
//     .split('\n')
//     .filter((s) => s !== '')
//   const result = []

//   const originalBalace = Number(firstLine)
//   let balance = originalBalace

//   result.push('Original Balance: ' + originalBalace.toFixed(2))

//   for (const item of arr) {
//     const [id, title, priceStr] = item.split(' ')
//     const price = Number(priceStr)
//     balance -= price
//     result.push(
//       `${id} ${title} ${price.toFixed(2)} Balance ${balance.toFixed(2)}`
//     )
//   }

//   const expense = originalBalace - balance
//   const average = expense / arr.length

//   result.push('Total expense  ' + expense.toFixed(2))
//   result.push('Average expense  ' + average.toFixed(2))

//   return result.join('\r\n')
// }

//+ #137 RGB To Hex Conversion
// function hex(c) {
//   if (c > 255) {
//     return 'FF'
//   }
//   if (c < 0) {
//     return '00'
//   }

//   // let hex = c.toString(16).toUpperCase() //else return c.toString(16).padStart(2, '0').toUpperCase()
//   // if (c < 16) {
//   //   hex = '0' + hex
//   // }
//   // return hex

//   return c.toString(16).padStart(2, '0').toUpperCase();
// }

// // https://caniuse.com/?search=padStart

// function rgb(r, g, b) {
//   return [r, g, b].map(hex).join("");
//   // return hex(r) + hex(g) + hex(b)
// }

// console.log(rgb(0, 0, 0)) //, '000000')
// console.log(rgb(0, 0, -20)) //, '000000')
// console.log(rgb(300, 255, 255)) //, 'FFFFFF')
// console.log(rgb(173, 255, 47)) //, 'ADFF2F')

// //+ #138 Birthday I - Cake
// const LETTER_A_CHARCODE = 'a'.charCodeAt(0);
// function cake(x, y) {
//   const total = Array.from(y)
//     .map((item, i) => (i % 2 === 0 ? item.charCodeAt(0) : item.charCodeAt(0) - LETTER_A_CHARCODE + 1))
//     .reduce((acc, num) => acc + num, 0)
//   console.log(total)
//   const candles = x * 0.7
//   return total >= candles ? 'Fire!' : 'That was close!'

//   //   You will work out the number of candles that will fall from the provided string (y).
//   //   You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in y, with the alphabetical position of each odd indexed character in y to give the string a total.

//   // example: 'abc' --> a=97, b=2, c=99 --> y total = 198.
// }

// console.log(cake(900, 'jmhttbhi')) //, 'That was close!');
// console.log(cake(56, 'ifkhchlhfd')) //, 'Fire!');
// console.log(cake(256, 'aaaaaddddr')) //, 'Fire!');

// + #140 Element equals its index ?????? That took too long, duration ( actual: 3331 ms ) should be under 150 ms

//sorted array → binary search
// function indexEqualsValue(a) {
//   let left = 0
//   let right = a.length - 1

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2)

//     if (mid === a[mid]) {
//       right = mid
//     } else if (mid > a[mid]) {
//       left = mid + 1
//     } else if (mid < a[mid]) {
//       right = mid - 1
//     }
//   }
//   return a[right] === right ? right : -1
// }

// console.log(indexEqualsValue([-8, 0, 2, 5])) //, 2 );
// console.log(indexEqualsValue([9, 10, 11, 12, 13, 14])) //, -1 );
// console.log(indexEqualsValue([0])) //, 0 );

//+ #141  Sort by Last Char

// function last(x) {
//   // const reverse = x
//   //   .split(' ')
//   //   .map((item) => Array.from(item).reverse().join(''))
//   // const newReverse = reverse.sort(
//   //   (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
//   // )
//   // return newReverse.map((item) => Array.from(item).reverse().join(''))
//   return x.split(" ").sort((a,b) => a[a.length - 1] < b[b.length - 1] ? -1 : 1);
// }

// console.log(last('man i need a taxi0 u1 2to ubud3')) //, ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
// console.log(last('what time are we climbing up the volcano')) //, ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
// console.log(last('take me to semynak')) //, ['take', 'me', 'semynak', 'to']);

//+ #142 Sort array by string length

// function sortByLength(array) {
//   return array.sort((a, b) => (a.length < b.length ? -1 : 1))
// }

// console.log(sortByLength(['Beg', 'Life', 'I', 'To'])) //,["I", "To", "Beg", "Life"]);

// console.log(sortByLength(['', 'Moderately', 'Brains', 'Pizza'])) //,["", "Pizza", "Brains", "Moderately"]);

// console.log(sortByLength(['Longer', 'Longest', 'Short'])) //,["Short", "Longer", "Longest"]);

//#143 Binary Search   ---------------------

function binSearch(arr, toSearch) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === toSearch) {
      return mid
    }
    if (arr[mid] < toSearch) {
      left = mid + 1
    }
    if (arr[mid] > toSearch) {
      right = mid - 1
    }
  }

  return -1
}

let arr = [1, 2, 3, 4, 5]

console.log(binSearch(arr, 6)) //, -1)
console.log(binSearch(arr, 2)) //, 1)
