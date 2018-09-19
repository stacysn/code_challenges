function beautifulDays(i, j, k) {
    let days = 0;

    for (i; i <= j; i++) {
        let reversedInt = parseInt(i.toString().split('').reverse().join(''));
        
        if (Math.abs(i - reversedInt) % k === 0) {
            days++;
        }
    }
    return days
}