const biryanikhor = ['abul','babul','cabul','abul','babul','dabul'];
const number = [1,2,3,4,5,6,7,8,9,71];

function noDuplicate(array){
    // console.log(array);
    const unique = [];
    for(const item of array){
        // console.log(item);
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
console.log(noDuplicate(biryanikhor));