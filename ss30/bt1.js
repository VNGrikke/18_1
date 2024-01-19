
function Symmetrical(arr,lenght){
    for (let i = 0;i < Math.floor(Math.trunc(lenght/2)); i++) {
        if(arr[i]!==arr[lenght-1]){
            return false;
        }
    }
    return true;
}
function createArr() {
    let arr = [];
    let character = "0123456789abcdefghijklmnopqrstuvwxyz";
    let lenght = Math.floor(Math.random() * 35)+1;
    for (let i = 0; i < lenght; i++) {
        arr.push(character[Math.floor(Math.random() * 36)]);
    }
    return arr;
}
let arr = createArr();
console.log(`mảng đã khai báo: ${arr}`);
let result = Symmetrical(arr,arr.length);
console.log(result);

