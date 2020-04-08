//Declaring variables
let vacationType = prompt("Hello, and welcome to TRAVEL-MATIC 3000.\n\nChoosing the vacation of your dreams has never been easier with TRAVEL-MATIC 3000!\n\nWhat kind of trip would you like to go on, musical, tropical, or adventurous?");
let groupSize = prompt("With our state-of-the-art PARTY-VISION technology, TRAVEL-MATIC 3000 can now suggest the perfect way to travel to your dream getaway.\n\nHow many people, including yourself, will be in your group?");
let destination = (vacationType === "musical") ? "New Orleans"
                : (vacationType === "tropical") ? "a beach vacation in Mexico"
                : (vacationType === "adventurous") ? "go whitewater rafting down the Grand Canyon"
                : false;
let travelMode = (groupSize > 0 && groupSize <= 2) ? "first class flight"
               : (groupSize >= 3 && groupSize <= 5) ? "helicopter ride"
               : (groupSize >= 6) ? "chartered private plane"
               : false;
let result = `Since you are a group of ${groupSize} going on a ${vacationType} vacation, you should take a ${travelMode} to ${destination}.`;

//having some fun here with "wrong" user inputs to the prompt
if (destination === false) {
    result = "You did not choose a musical, tropical, or adventurous vacation.\n\nTRAVEL-MATIC 3000 has determined these are the three most optimal vacation types for humans.\n\n\Please restart TRAVEL-MATIC 3000 and try again to receive your ideal vacation recommendation.";
} else if (travelMode === false) {
    result = "Please do not try to goof TRAVEL-MATIC 3000 by entering physically impossible numbers for your group size.\n\n\TRAVEL-MATIC 3000 takes its responsibilities very seriously.\n\nPlease restart TRAVEL-MATIC 3000 and try again to receive your ideal vacation recommendation.";
} 

//The lovely output message
console.log(`${result} \n\nThank you for choosing TRAVEL-MATIC 3000. \n\nThe vacation of your dreams awaits!`);