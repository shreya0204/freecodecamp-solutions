function countOnline(usersObj) {
    // Only change code below this line
    let count = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            count += 1;
        }
    }
    return count;
    // Only change code above this line
}