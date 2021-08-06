function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line

    // SOLUTION
    
    switch (val) {

        case 1:
            answer = "Low";
        case 2:
            answer = "Low";
        case 3:
            answer = "Low";
            break;
        case 4:
            answer = "Mid";
        case 5:
            answer = "Mid";
        case 6:
            answer = "Mid";
            break;
        case 7:
            answer = "High";
        case 8:
            answer = "High";
        case 9:
            answer = "High";
            break;
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);