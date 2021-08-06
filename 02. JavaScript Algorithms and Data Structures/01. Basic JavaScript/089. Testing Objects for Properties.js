// SOLUTION

function checkObj(obj, checkProp) {
    // Your Code Here
    var hasproperty = obj.hasOwnProperty(checkProp);
    if (hasproperty) {
        return obj[checkProp];
    }
    return "Not Found";
}

// Test your code by modifying these values