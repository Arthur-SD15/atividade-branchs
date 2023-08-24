const countIt = () =>{
    let word = document.getElementById("word").value;
    // word = word.toLowerCase().replace(/[\.\s]/g, '');
    word = word.toLowerCase().match(/[a-z]/g).sort();
    let letterCount = {};
    //creat a count variable and set it to 0
    word.forEach(letter => {
    if (letterCount[letter]){
    letterCount[letter]++;
    }else{
    letterCount[letter] = 1;
    }
    })
    let infoArray = Object.entries(letterCount);
    let resultArray = [];
    for (let i = 0; i < infoArray.length; i++){
    infoArray[i][0] = infoArray[i][0] + ':';
    resultArray.push(infoArray[i]);
    }
    let finalArray = [];
    for (let j = 0; j < resultArray.length; j++){
    finalArray.push(resultArray[j].join(""));
    
    }
    let resultString = finalArray.join(" ");
    document.getElementById("result").innerHTML = resultString;
    document.getElementById("word").value = "";
}