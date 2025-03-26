let a=parseInt(prompt("Nhập Số Nguyên Tố Muốn In Ra:"));
let count=0;
let number=2;

while(count<a){
    let isPrime=true;
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number % i===0){
            isPrime=false;
            break;
        }
    }

    if(isPrime){
        console.log(`Số ${number} là số nguyên tố thứ ${count+1}`);
        count++;
    }
    number++;
}