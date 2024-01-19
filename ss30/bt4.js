function check(arr) {
    let newArr = [];
    for (const value of arr) {
        if (value === 2 || value === 3 || value === 5) {
            newArr.push(value);
        }else if(value%2 !== 0 && value%3 !== 0 && value%5 !== 0 && value !== 1){
            newArr.push(value);
        }
    }
    return newArr
}
let arr = [9,3,7,46,45,22,2,6,48,12,99,44,31];
let afterCheck =  check(arr);
console.log(`các số nguyên có trong mảng là: ${afterCheck}`);