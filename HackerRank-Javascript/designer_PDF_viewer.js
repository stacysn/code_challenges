function designerPdfViewer(h, word){
    // Complete this function
    let heightKeys = (alphaCode(h));
    let letters = word.split("");
    let letterValues = []
    let highestLetter = 0;

    for (let i = 0; i < letters.length; i++){
        letterValues.push(heightKeys[letters[i]])
    }


    for (let j = 0; j < letterValues.length; j++){
        if (letterValues[j] > highestLetter){
            highestLetter = letterValues[j]
        }

    }
    return highestLetter * word.length
}
