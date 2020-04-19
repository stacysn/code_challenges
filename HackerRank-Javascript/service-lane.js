// Complete the serviceLane function below.
function serviceLane(n, cases, width) {
    let min = []
    for(let i = 0; i<cases.length; i++){
        let a = []
        for(let x = cases[i][0]; x <= cases[i][1]; x++) {
            a.push(width[x])
        }
        min.push(Math.min.apply(Math,a))
    } 
    return min
}
