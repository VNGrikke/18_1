let n = +prompt(`nhập vào 1 số nguyễn dương bất kì`);
let arr = [];
for (let i = 0; i <= n; i++) {
    if (i%2!==0) {
        arr.push(i);
    }    
}
if(arr.length%2===0){
    arr.splice(Math.floor(Math.random() * arr.length),1);
}
console.log(`các số lẻ trong khoảng từ 0 đến ${n} là: ${arr}`);