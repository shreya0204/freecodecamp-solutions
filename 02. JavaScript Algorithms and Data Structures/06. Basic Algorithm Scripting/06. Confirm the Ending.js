function confirmEnding(str, target) {
    let totalLength = str.length;
    let targetLength = target.length;
    return str.slice(totalLength - targetLength,) == target ? true : false;
}

confirmEnding("Bastian", "n");
