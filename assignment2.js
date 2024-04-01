//1.  A function called randomFood, tha uses Math.random to randomely choose a favourite food in the favoriteFood array to return.

let chosenFood = "";

function randomFood () {
    let favoriteFood = ["salad", "pizza", "ice cream", "doughnuts", "Beverage"];
    let indexFood = Math.floor(Math.random() * favoriteFood.length);
    chosenFood = favoriteFood[indexFood];
return chosenFood;
}

console.log (randomFood());

//2. A function called myName that logs my full name 

function myName() {
    let fullName = "Gloria Jumai Williams";
    return fullName;
}

console.log(myName());

//3. Dofference between a rest and spread Operators
// A rest operator  (...) is used to collect data from the user to add to the javascript.
// the spread operator (...) is used to copy the entire data of an array and add it to the new array for which it is inputed.