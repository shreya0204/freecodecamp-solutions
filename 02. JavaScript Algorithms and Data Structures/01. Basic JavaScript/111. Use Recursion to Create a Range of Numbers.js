
// SOLUTION

var myArray = [];
function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    }
    else {
        myArray.push(startNum);
        rangeOfNumbers(startNum + 1, endNum);
    }
    return myArray;
};
