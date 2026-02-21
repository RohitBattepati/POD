/*
2026 Winter Games Day 15: Freestyle Skiing
Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.

A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.

The two words will be separated by a single space.
Valid first words:

"Misty"
"Ghost"
"Thunder"
"Solar"
"Sky"
"Phantom"
"Frozen"
"Polar"

Valid second words:
"Twister"
"Icequake"
"Avalanche"
"Vortex"
"Snowstorm"
"Frostbite"
"Blizzard"
"Shadow"

*/

function isValidTrick(trickName) {



    const words = trickName.split(" ");

    words[0]

    if ([
        "Misty",
        "Ghost",
        "Thunder",
        "Solar",
        "Sky",
        "Phantom",
        "Frozen",
        "Polar"].includes(words[0]) && [
            "Twister",
            "Icequake",
            "Avalanche",
            "Vortex",
            "Snowstorm",
            "Frostbite",
            "Blizzard",
            "Shadow",
        ].includes(words[1])) {
        return true;
    } else {
        return false;
    }
}

/*
Test cases

isValidTrick("Polar Vortex") should return true.
Passed:2. isValidTrick("Solar Icequake") should return true.
Passed:3. isValidTrick("Thunder Blizzard") should return true.
Passed:4. isValidTrick("Phantom Frostbite") should return true.
Passed:5. isValidTrick("Ghost Avalanche") should return true.
Passed:6. isValidTrick("Snowstorm Shadow") should return false.
Passed:7. isValidTrick("Solar Sky") should return false.


*/