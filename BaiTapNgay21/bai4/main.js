let a=parseFloat(prompt("Nhập hệ số a:"));
let b=parseFloat(prompt("Nhập hệ số b:"));
let c=parseFloat(prompt("Nhập hệ số c:"));

let delta=b*b-4*a*c;
if(delta<0){
    alert("Phương Trình Vô Nghiệm");
}

else if(delta==0){
    let x1=-b/2*a;
    alert("Phương Trình Có Nghiệm Kép x1=x2="+x1);
}

else{
    let x1=(-b + Math.sqrt(delta))/2*a;
    let x2=(-b - Math.sqrt(delta))/2*a;

    alert("Phương Trình Có Hai Nghiệm Phân Biệt: x1="+ x1 +" x2="+x2);
}