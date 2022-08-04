function make_avg(num1, num2, num3) {
    var avg = (num1 + num2 + num3) / 3;
    return avg;
}

var num1 = 40, num2 = 56, num3 = 78;
var avg = make_avg(num1, num2, num3);
console.log(avg);