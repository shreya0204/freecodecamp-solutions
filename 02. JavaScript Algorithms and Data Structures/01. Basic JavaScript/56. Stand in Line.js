function nextInLine(arr, item) {
    // Only change code below this line

    // SOLUTION
    
    arr.push(item);
    var removed_element = arr.shift()
    return removed_element;
    
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));