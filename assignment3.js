let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


    programming.languages.push("Go"); //wrote the command to add the language "Go" to the end of the languages array
    programming.difficulty = 7; //Changed the difficulty to the value of 7
    delete programming.jokes; // Wrote the command to remove the jokes from the prgramming object
    programming.isFun = true; // Wrote the command to add a new key called isFun and a value of true t the programming object

    console.log(programming);