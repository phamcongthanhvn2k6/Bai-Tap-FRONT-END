let a=parseFloat(prompt("Nhập Điểm Toán:"));
let b=parseFloat(prompt("Nhập Điểm Văn:"));
let c=parseFloat(prompt("Nhập Điểm Anh:"));

Number(d=(a+b+c)/3);

if(d>=8){
    console.log(`${d} Điểm đạt loại Giỏi.`);
}
else if(d>=6.5 && d<=7.9){
    console.log(`${d} Điểm đạt loại Khá.`);
}
else if(d>=5.0 && d<=6.4){
    console.log(`${d} Điểm đạt loại Trung Bình.`);
}
else{
    console.log(`${d} Điểm đạt loại Yếu.`);
}

