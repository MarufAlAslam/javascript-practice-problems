function findOddSum(numArray) {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 != 0) {
            sum += numArray[i];
        }
        else {
            continue
        }
    }

    return sum
}


var array = [5, 7, 8, 10, 45, 30]
console.log(findOddSum(array))