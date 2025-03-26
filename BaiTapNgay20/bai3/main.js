let a=parseInt(prompt("Nhập Một Số Để Kiểm Tra:"));

if(isNaN(a)|| a<=0){
    alert("Dữ Liệu Nhập Và Không Hợp Lệ:");
}

else{
    let a1=a;
    let daonguoc=0;
    while(a>0){
        let chucuoicung =a%10;
        daonguoc=daonguoc*10+chucuoicung;
        a=Math.floor(a/10);
    }
    if(daonguoc===a1){
        alert("Đây Là Số Đối Xứng");
    }
    else{
        alert("Đây Không Phải Là Số Đối Xứng");
    }
}
