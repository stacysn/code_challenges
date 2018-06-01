function countingValleys(n, s) {
    let indivCounts = [0]; //for reference of sea level
    let totalCounts = 0;
    let valleys = 0;
    for (let i = 0; i < s.length; i++){ //add/subtract each change of altitude
        if (s[i] === 'D'){
            totalCounts -= 1;
            indivCounts.push(totalCounts)
        } else {
            totalCounts += 1;
            indivCounts.push(totalCounts)
        }
    }
    for (let j = 0; j < indivCounts.length; j++){ //iterate through the indivCounts
        if (indivCounts[j] < 0 && indivCounts[j + 1] >= 0){
            valleys += 1
        }
    }
    return valleys
}
