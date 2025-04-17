function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
console.log('inchToFeet',inchToFeet(72));



// ignor
function inchtoFeet(inch){
    const feetFraction = inch /12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'fit' + inchRemaining + 'inch';
    return result;
}
console.log(inchtoFeet(64))



function mileToKilometer(mile){
    const kilo = mile * 1.6093;
    return kilo;
}
console.log('mile to kilomiter',mileToKilometer(54));