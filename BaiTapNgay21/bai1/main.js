let tong=0;
let a;
for (let i=0;i<5;i++){
    a =parseInt(prompt("Nhập Vào Một Số:"));
    if(a%2!==0){
        tong+=a;
    } 
}
alert("Tổng Của Các Số Lẻ Là: "+tong);