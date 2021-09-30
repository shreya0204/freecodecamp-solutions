function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return "";
    }
    let str1 = str;
    for (let i = 1; i < num; i++) {
        str += str1;
    }
    return str;
}

repeatStringNumTimes("abc", 3);