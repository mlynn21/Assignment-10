//STEP 1
// function wordAlphabetizer(word) {
//     let alphabetizedWord = word.match(/[abcdefghijklmnopqrstuvwxyz]/gi).sort().toString().replace(/,/g, '')
//     return alphabetizedWord;
// }

// console.log(wordAlphabetizer('webmaster'));


//STEP 2
// function capitalize(sentence) {
//     let words = sentence.split(' ');
//     console.log(words);

//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//         }
//     console.log(words);
//     }
  
// capitalize('The quick brown fox jumps over the lazy dog.');


//STEP 3
// function findVowels(sentence) {
//     let vowels = sentence.match(/[aeiou]/gi).length;
//     return vowels;
// }

// console.log(findVowels('The quick brown fox'));

//STEP 4
// function randomString(length) {
//     return Math.random().toString(16).substr(2, length);
// };
// console.log(randomString(8));


//STEP 5
function longestName(names) {
    var nameLength = names[0].length;
    var ans = names[0];

    for (var i = 1; i < names.length; i++) {
        var longest = names[i].length;

        if (longest > nameLength) {
            ans = names[i];
            nameLength = longest;
        }
    }
    return ans;
}
console.log(longestName(['Australia', 'Germany', 'United States of America']));




