/*

Blood Type Compatibility
Given a donor blood type and a recipient blood type, determine whether the donor can give blood to the recipient.

Each blood type consists of:

A letter: "A", "B", "AB", or "O"
And an Rh factor: "+" or "-"
Blood types will be one of the valid letters followed by an Rh factor. For example, "AB+" and "O-" are valid blood types.

Letter Rules:

"O" can donate to other letter type.
"A" can donate to "A" and "AB".
"B" can donate to "B" and "AB".
"AB" can donate only to "AB".
Rh Rules:

Negative ("-") can donate to both "-" and "+".
Positive ("+") can donate only to "+".
Both letter and Rh rule must pass for a donor to be able to donate to the recipient.


Test Cases:
1. canDonate("B+", "B+") should return true.
2. canDonate("O-", "AB-") should return true.
3. canDonate("O+", "A-") should return false.
4. canDonate("A+", "AB+") should return true.
5. canDonate("A-", "B-") should return false.
6. canDonate("B-", "AB+") should return true.
7. canDonate("B-", "A+") should return false.
8. canDonate("O-", "O+") should return true.
9. canDonate("O+", "O-") should return false.
10. canDonate("AB+", "AB-") should return false.
*/

function canDonate(donor, recipient) {

    const bloodGroups = ["A", "B", "AB", "O"]
    const Rh = ["+", "-"]

    if (donor === "O+" && (recipient === "O+" || recipient === "A+" || recipient === "B+" || recipient === "AB+")) {
        return true
    } else if (donor === "O-" && (recipient === "O+" || recipient === "A+" || recipient === "B+" || recipient === "AB+" || recipient === "O-" || recipient === "A-" || recipient === "B-" || recipient === "AB-")) {
        return true
    } else if (donor === "A+" && (recipient === "A+" || recipient === "AB+")) {
        return true
    } else if (donor === "A-" && (recipient === "A+" || recipient === "AB+" || recipient === "A-" || recipient === "AB-")) {
        return true
    } else if (donor === "B-" && (recipient === "B+" || recipient === "AB+" || recipient === "B-" || recipient === "AB-")) {
        return true
    } else if (donor === "B+" && (recipient === "B+" || recipient === "AB+")) {
        return true
    }
    else if (donor === "AB+" && (recipient === "AB+")) {
        return true
    } else if (donor === "AB-" && (recipient === "AB+" || recipient === "AB-")) {
        return true
    } else {
        return false
    }



}


