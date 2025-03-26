let  a= parseInt(prompt("Nhập Một Số Nguyên Dương Để Tính Tổng Các Chữ Số:"));

if(isNaN(a)|| a<=0){
    alert("dữ liệu nhập vào không hợp lệ");
}

else{
    let tong=0;
    for (let i=0;i<=a;i++){
        tong+=i;
    }
    alert("Kết Quả Là: "+ tong);
}