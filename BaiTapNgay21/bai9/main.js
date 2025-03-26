let a=parseInt(prompt("Nhập Vào Một Số Để Kiểm Tra Có Phải Số Nguyên Tố hay Không:"));
let isPrime=true;
for(let i=2;i<Math.sqrt(a);i++){
    if(a%i===0){
        isPrime=false;
    }
}

if(isPrime){
    alert("Số "+a+" Là Số Nguyên Tố");
}
else{
    alert("Số "+a+" Là Không Phải Số Nguyên Tố");
}