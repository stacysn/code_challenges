//Sample:
// rotLeft([1,2,3,4,5], 4) ==> [5,1,2,3,4]
//explanation:
//d = 4 left rotations
//array 'rotates' 4x
//[1,2,3,4,5] => [2,3,4,5,1] => [3,4,5,1,2] => [4,5,1,2,3] => [5,1,2,3,4]

function rotLeft(a, d) {
    for (let i = 0; i < d; i++){
        let first = a[0];
        a.shift();
        a.push(first);
    }
    return a;
}
