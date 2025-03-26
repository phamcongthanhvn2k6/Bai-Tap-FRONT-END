let a=prompt("Nhập Input:");
if(a=="VND-->USD"){
    let b=parseInt(prompt("Nhập VND"));
    let c=b/23000;
    alert("USD: "+Number(c));
}
else if(a=="USD-->VND"){
    let b=parseInt(prompt("Nhập USD"));
    let c=b*23000;
    alert("USD: "+Number(c));
}