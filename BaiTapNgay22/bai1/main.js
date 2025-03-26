let numberArray =[];
let a =parseInt(prompt("Nhập số phần tử của mảng: "));
for(let i=0;i<a;i++){
    numberArray.push(parseInt(prompt("Nhập phần tử thứ "+(i+1)+": ")));
}
console.log("Mảng vừa nhập là: "+numberArray);