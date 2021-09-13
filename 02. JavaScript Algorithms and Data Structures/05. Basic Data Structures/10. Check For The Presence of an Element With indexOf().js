function quickCheck(arr, elem) {
    // Only change code below this line
    let bool = arr.indexOf(elem);
    if (bool < 0)
        return false;
    else
        return true;
    // Only change code above this line

}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));