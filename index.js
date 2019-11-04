// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(typeof a);  // a is a String
console.log(typeof b);  // b is an Object (array)

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
console.log(a.map(function(x) {return x*2;}));


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
console.log(colors.join(' '));
console.log(colors.join('+'));
console.log(colors.join(','));


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
console.log(a.sort(function(a, b){return b - a}));


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function findMost(array) {
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
console.log(findMost(a));