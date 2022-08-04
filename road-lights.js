var color = "red";

// using if-else
if (color === "green") {
    console.log("You May Go");
}
else if (color === "yellow") {
    console.log("Please Slow down or stop");
}
else if (color === "red") {
    console.log("Stop! It will be dangerous");
}
else {
    console.log("Unknown color");
}

// using switch-cases
switch (color) {
    case "green":
        console.log("You May Go");
        break;
    case "yellow":
        console.log("Please Slow down or stop");
        break;
    case "red":
        console.log("Stop! It will be dangerous");
        break;
    default:
        console.log("Unknown color");
        break;
}