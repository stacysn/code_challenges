
// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
    for(let i = 0; i<k; i++) {      
        var x = a.pop()
        a.unshift(x)
    }
    for(let j = 0; j < queries.length; j++) {
        console.log(a[queries[j]])
    }
}
