// SOLUTION

function checkObj(myObj, checkProp) {
    // Your Code Here
    var hasproperty = myObj.hasOwnProperty(checkProp);
    if (hasproperty) {
        return myObj[checkProp];
    }
    return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");