const a=parseInt(prompt("Nhập Vào Một Số:"));
for(let i=1;i<=a;i++){
    if(a%i===0){
        console.log("Số "+i+" Là Ước Số Của "+a);
    }
}