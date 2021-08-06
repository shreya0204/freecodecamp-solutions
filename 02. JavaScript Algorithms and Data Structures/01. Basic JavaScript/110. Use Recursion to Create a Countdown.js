// Only change code below this line

// SOLUTION

var myArray = [];
function countdown(n) {

    if (n < 1) {
        return [];
    } else {
        myArray.push(n);
        countdown(n - 1);
        return myArray;
    }
}

// Only change code above this line
