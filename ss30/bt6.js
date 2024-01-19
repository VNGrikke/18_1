function checkTriangle(arr) {
    let triangles = [];
    let n = arr.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] > arr[k] &&
                    arr[i] + arr[k] > arr[j] &&
                    arr[j] + arr[k] > arr[i]) {
                    triangles.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return triangles;
}
let arr = [4, 6, 3, 7];
let result = checkTriangle(arr);

console.log("Các cạnh của tam giác có thể tạo ra:");
for (let i = 0; i < result.length; i++) {
    console.log(result[i].join(", "));
}
