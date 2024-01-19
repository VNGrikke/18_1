function writeInCapitals(arr) {
    var newArr = arr.split(' ');
    for (var i = 0; i < newArr.length; i++) {
        var vocab = newArr[i];
            if (vocab.length > 0) {
            var lastLetter = vocab.charAt(vocab.length - 1).toUpperCase();
            newArr[i] = vocab.slice(0, vocab.length - 1) + lastLetter;
        }
    }
    var result = newArr.join(" ");
    return result;
}
var arr = "Mai nghi hoc";
console.log(arr);
var arrUpperCase = writeInCapitals(arr);
console.log(arrUpperCase);
