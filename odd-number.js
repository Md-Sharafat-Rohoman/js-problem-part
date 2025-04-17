function oddAverage(numbers) {
    let sum = 0;
    let odds = [];
    for (const number of numbers) {
        // console.log(number);
        if (number % 2 === 1) {
            // sum = sum + number;
            odds.push(number);
        }
    }
    console.log(odds);
    
    for(const odd of odds){
        sum = sum + odd;
    }
    console.log(sum);
    return sum/odds.length;


}
console.log('odd average', oddAverage([1, 3, 5, 6, 7, 8, 9]));