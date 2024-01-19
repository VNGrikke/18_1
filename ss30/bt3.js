function sort(newArr,n){
    let arrChar = '';
    let arrInt = '';
    let arrSpc = '';
    for (let i = 0; i < n; i++) {
        if (/[a-zA-Z]/.test(newArr[i])) {
            arrChar+=newArr[i];
        } else if(/[0-9]/.test(newArr[i])) {
            arrInt+=newArr[i];
        }else{
            arrSpc+=newArr[i];
        }
    }
    let arr = arrChar.concat(arrInt,arrSpc);
    return arr;
}
let arr = prompt(`nhập vào 1 chuỗi bất kì`);
console.log(`chuỗi trước khi sắp xếp: ${arr}`);
let newArr = arr.split('');
let result = sort(newArr, newArr.length);
console.log(`chuỗi sau khi sắp xếp: ${result}`);