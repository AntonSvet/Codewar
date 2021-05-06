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

// # 202 The Office I - Outed
function outed(meet, boss) {}

console.log(
  outed(
    {
      tim: 0,
      jim: 2,
      randy: 0,
      sandy: 7,
      andy: 0,
      katie: 5,
      laura: 1,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0,
    },
    'laura'
  )
) //, 'Get Out Now!');
console.log(
  outed(
    {
      tim: 1,
      jim: 3,
      randy: 9,
      sandy: 6,
      andy: 7,
      katie: 6,
      laura: 9,
      saajid: 9,
      alex: 9,
      john: 9,
      mr: 8,
    },
    'katie'
  )
) //, 'Nice Work Champ!');
console.log(
  outed(
    {
      tim: 2,
      jim: 4,
      randy: 0,
      sandy: 5,
      andy: 8,
      katie: 6,
      laura: 2,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 8,
    },
    'john'
  )
) //, 'Get Out Now!');
