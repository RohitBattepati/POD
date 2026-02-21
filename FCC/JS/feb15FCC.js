/*
    Given a ski hill's vertical drop, horizontal distance, and type, determine 
    the difficulty of the hill. To determine the rating 

    - Caluculate the steepness of the hill by taking the drop divided by the distance. 
    - Then, caluculate the adjusted steepness based on the hill type: 
        "Downhill" multiple steepness by 1.2
        "Slalom" multiple steepness by 0.9
        "Giant Slalom" multiple steepness by 1.0


    Return:

"Green" if the adjusted steepness is less than or equal to 0.1
"Blue" if the adjusted steepness is greater than 0.1 and less than or equal to 0.25
"Black" if the adjusted steepness is greater than 0.25

*/

function getHillRating(drop, distance, type) {

    let steepness = drop / distance;

    if (type === "Downhill") {
        steepness *= 1.2;
    } else if (type === "Slalom") {
        steepness *= 0.9;
    } else if (type === "Giant Slalom") {
        steepness *= 1.0;
    }

    let adjustedSteepness = steepness;

    if (adjustedSteepness <= 0.1) {
        return "Green"
    } else if (0.25 >= adjustedSteepness > 0.1) {
        return "Blue"
    } else if (adjustedSteepness > 0.25) {
        return "Black"
    }

    return drop;
}

//Tests
// getHillRating(95, 900, "Slalom") should return "Green".
// getHillRating(620, 2800, "Downhill") should return "Black".
// getHillRating(420, 1680, "Giant Slalom") should return "Blue".
// getHillRating(250, 3000, "Downhill") should return "Green".
// getHillRating(110, 900, "Slalom") should return "Blue".
// getHillRating(380, 1500, "Giant Slalom") should return "Black".