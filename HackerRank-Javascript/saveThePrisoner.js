function saveThePrisoner(n, m, s){
    // Complete this function
    let a = s+m-1;
    if(a>n){
        if(a%n==0){
         return n;
        }
        return a%n;
    }
   return(a);

}
