function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    // SOLUTION
    
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case "John":
            answer = "";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        case 156:
            answer = "";
            break;
        default:
            answer = "c";
    }
    // Only change code above this line
    return answer;
}

chainToSwitch(7);