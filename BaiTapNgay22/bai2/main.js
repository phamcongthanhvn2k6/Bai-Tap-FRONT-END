let numbers=[2,5,7,4,1,8,6];
let x=parseInt(prompt("Nhập số cần tìm: "));
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===x){
        alert("Bingo");
        break;
    }
    else{
        alert("Chúc Bạn May mắn lần sau");
    }
}