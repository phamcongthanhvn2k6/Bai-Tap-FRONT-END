let a=parseFloat(prompt("Nhập a:"));
let b=parseFloat(prompt("Nhập b:"));
let c=parseFloat(prompt("Nhập c:"));

let lonnhat= (a>b)?(a>c?a:c):(b>c?b:c);

alert("Số Lơn Nhất Trong Ba Số Là: "+lonnhat);