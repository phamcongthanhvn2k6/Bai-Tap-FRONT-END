let  a= parseInt(prompt("Nhập Một Số Nguyên Dương:"));

if(isNaN(a)|| a<=0){
    alert("dữ liệu nhập vào không hợp lệ");
}

else{
    let result = [];
    for (let i=1;i<=a;i++){
        if (i%5==0){
            result.push(i);        
        }
    }
    alert("Các số chia hết cho 5 từ 1 đến " + a + " là: " + result.join(", "));
}