let a=parseInt(prompt("Nhập Số a:"));
let b=parseInt(prompt("Nhập Bậc Lũy Thừa"));

if(isNaN(a)||isNaN(b)){
    alert("Số Không Hợp Lệ");
}

else{
    let so=1;
    for(let i=0;i<b;i++){
        so=so*a;
    }
    alert("Kết Quả Là: "+so);
}