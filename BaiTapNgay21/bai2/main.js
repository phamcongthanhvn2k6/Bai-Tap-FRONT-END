let even=0;
let odd=0;
let a;
for(let i=0;i<5;i++){
    a=parseInt(prompt("Nhập Và Một Số Nguyên: "));
    if(a%2===0){
        even++;
    }
    else{
        odd++;
    }
}
alert("Số Chắn Có: "+even +" Số "+" Và Số Lẻ Có: "+odd+" Số");