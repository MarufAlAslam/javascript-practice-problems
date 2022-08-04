function findLeapYear(year, newYearArray) {
    for (var i = 0; i < year.length; i++) {
        if (year[i] % 400 == 0) {
            newYearArray.push(year[i]);
        }
        else if (year[i] % 100 == 0) {
            continue;
        }
        else if (year[i] % 4 == 0) {
            newYearArray.push(year[i]);
        }
        else {
            continue;
        }
    }

    return newYearArray;
}

var years = [2023, 2024, 2025, 2028, 2030];
var newYearArray = [];

console.log(findLeapYear(years, newYearArray))
