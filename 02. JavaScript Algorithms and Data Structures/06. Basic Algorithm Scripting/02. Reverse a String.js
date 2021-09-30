function reverseString(str) {
    let splitstr = str.split("");
    let reversestr = splitstr.reverse();
    str = reversestr.join("");
    return str;
}

reverseString("hello");