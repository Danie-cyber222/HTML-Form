function longestWord(str){
    let words = str.split(" ");
    let longestWord = "";

    for(let word of words){
      if(word.length>longestWord.length){
        longestWord= word;
      }
    }


    return longestWord;
}

console.log(longestWord("i woke up early today"));
console.log(longestWord("this is the longest of words."));