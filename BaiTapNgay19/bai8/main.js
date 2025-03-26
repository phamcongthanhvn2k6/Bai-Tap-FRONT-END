let a=parseInt(prompt("Nhập Tháng Trong Năm:"));

if(a>12 || a<1){
    alert("Tháng Không Hợp Lệ!");
}

else{
    if(a>=1 &&a<=3){
        alert("Tháng "+a+" Là Mùa Xuân");
    }
    else if(a>=4 &&a<=6){
        alert("Tháng "+a+" Là Mùa Hạ");
    }
    else if(a>=7 &&a<=9){
        alert("Tháng "+a+" Là Mùa Thu");
    }
    else{
        alert("Tháng "+a+" Là Mùa Đông");
    }
}