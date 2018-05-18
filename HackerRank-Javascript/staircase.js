function staircase(n) {
    let i = 1;
    let space = n - 1;
    while (i <= n){
       console.log((' '.repeat(space)) + ('#').repeat(i))
        i++;
        space --;
    }
}
