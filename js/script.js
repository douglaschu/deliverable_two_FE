//Declaring variables
let vacationType = prompt("Hello, and welcome to TRAVEL-MATIC 3000.\n\nChoosing the vacation of your dreams has never been easier with TRAVEL-MATIC 3000!\n\nWhat kind of trip would you like to go on, musical, tropical, or adventurous?");
let groupSize = prompt("With our state-of-the-art PARTY-VISION technology, TRAVEL-MATIC 3000 can now suggest the perfect way to travel to your dream getaway.\n\nHow many people, including yourself, will be in your group?");
let result; //Declaring result as an empty variable, as its value is dependent on how the user prompts affect the conditionals
 
if (vacationType === "musical" && groupSize >= 0) {
    result = `For the ${vacationType} experience of a lifetime, you should go to New Orleans and you should fly first class.`;
} else if (vacationType === "musical" && groupSize >= 3 && groupSize <= 5) {
    result = `For the ${vacationType} experience of a lifetime, you should go to New Orleans and you should go there by helicopter.`;
} else if (vacationType === "musical" && groupSize >= 6) {
    result = `For the ${vacationType} experience of a lifetime, you should go to New Orleans and you should charter a flight to get there.`
}

if (vacationType === "tropical" && groupSize >= 0) {
    result = `For a ${vacationType} getaway, you should take a beach vacation to Mexico and you should fly first class.`;
} else if (vacationType === "tropical" && groupSize >= 3 && groupSize <=5) {
    result = `For a ${vacationType} getaway, you should take a beach vacation to Mexico and you should go there by helicopter.`;
} else if (vacationType === "tropical" && groupSize >= 6) {
    result = `For a ${vacationType} getaway, you should take a beach vacation to Mexico and you should charter a flight to get there.`;
}

if (vacationType === "adventurous" && groupSize >= 0) {
    result = `If you're feeling ${vacationType}, you should go whitewater rafting down the Grand Canyon and you should fly first class to get there.`;
} else if (vacationType === "adventurous" && groupSize >= 3 && groupSize <= 5) {
    result = `If you're feeling ${vacationType}, you should go whitewater rafting down the Grand Canyon and you should go there by helicopter.`;
} else if (vacationType === "adventurous" && groupSize >= 6) {
    result = `If you're feeling ${vacationType}, you should go whitewater rafting down the Grand Canyon and you should charter a flight to get there.`;
}

//having some fun here with non-standard user inputs to the prompt
if (vacationType !== "musical" && vacationType !== "tropical" && vacationType !== "adventurous") {
    result = "You did not choose a musical, tropical, or adventurous vacation.\n\nTRAVEL-MATIC 3000 has determined these are the three most optimal vacation types for humans.\n\n\Please restart TRAVEL-MATIC 3000 and try again.";
}

//The lovely output message
console.log(`${result} \n\nThank you for choosing TRAVEL-MATIC 3000. \n\nThe vacation of your dreams awaits!`);



//First attempt, works but doesn't use result variable
// if (vacationType === "musical") {
//     console.log(`For the ${vacationType} experience of a lifetime, you should go to New Orleans `);
// } else if (vacationType === "tropical") {
//     console.log(`For a ${vacationType} getaway, you should take a beach vacation to Mexico `);
// } else if (vacationType === "adventurous") {
//     console.log(`If you're feeling ${vacationType}, you should go whitewater rafting down the Grand Canyon `);
// }

// if (groupSize >= 0) {
//     console.log(`and you should fly first class.`);
// } else if (groupSize >=3 && groupSize <=5) {
//     console.log(`and you should take a helicopter to get there. `);
// } else if (groupSize >= 6) {
//     console.log("and you should charter a flight to get there.");
// }

// console.log(`Thank you!`);