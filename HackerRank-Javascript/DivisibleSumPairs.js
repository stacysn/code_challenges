function divisibleSumPairs(n, k, ar) {
  let divByK = []
  for (let i = 0; i < ar.length; i++){
      for (let j = i + 1; j < ar.length; j++){
          if ( (ar[i] + ar[j]) % k === 0){
              let divArr = [i, j]
              divByK.push(divArr)
          }
      }
  }
  return divByK.length
}
