

function getLetter(s) {
    let letter;
    // Write your code here
    const s1 = s[0];
    switch ("aeiou".includes(s1)) {
        case true:
            letter = 'A';
    }
    switch ("bcdfg".includes(s1)) {
        case true:
            letter = 'B';
    }
    switch ("hjklm".includes(s1)) {
        case true:
            letter = 'C';
    }
    switch ("npqrstvwxyz".includes(s1)) {
        case true:
            letter = 'D';
    }
    return letter;
}

