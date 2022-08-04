function make_avg(num, size) {
    var total = 0, avg = 0;
    for (var i = 0; i < size; i++) {
        total = total + num[i];
    }
    avg = total / size;
    return avg
}

var num = [40, 56, 78];
var size = num.length;
var avg = make_avg(num, size);
console.log(avg);