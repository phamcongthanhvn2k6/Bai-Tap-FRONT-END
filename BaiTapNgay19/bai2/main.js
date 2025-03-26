let kytu=prompt("Nhập Một Ký Tự");

if(kytu.length===1 && (kytu <='z' && kytu>='a') || (kytu <='Z' && kytu>='A')){
    alert("Ký Tự" + kytu + "Là Chữ Cái");
}
else{
    alert("Ký Tự " + kytu + " Không Phải Là Chữ Cái");
}