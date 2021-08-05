function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    // SOLUTION
    else if (val < 5) {
        return "Smaller than 5";
    }

    // SOLUTION
    else { return "Between 5 and 10"; }
}

testElseIf(7);