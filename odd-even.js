// types
// 1. no return, no arguments/parameters
// 2. has return, no arguments/parameters
// 3. no return, has arguments/parameters
// 4. has return, has arguments/parameters


// no return no arguments/parameters
function odd_even() {
    console.log("no return no arguments/parameters")
    var num1 = 41;
    if (num1 % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}

// has return no arguments/parameters
function odd_even1() {
    console.log("has return no arguments/parameters")
    var num1 = 41;
    if (num1 % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}


// no return has arguments/parameters
function odd_even2(num) {
    console.log("no return has arguments/parameters")
    // var num1 = 41;
    if (num % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}


// has return no arguments/parameters
function odd_even3(num) {
    console.log("has return has arguments/parameters")
    // var num1 = 41;
    if (num % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

odd_even();
console.log(odd_even1())
odd_even2(41);
console.log(odd_even3(41));