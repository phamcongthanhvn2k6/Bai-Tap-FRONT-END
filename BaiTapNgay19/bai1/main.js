let thang=parseInt(prompt("Nhập Tháng Muốn Kiểm Tra:"));

if(thang>12 || thang<1){
    alert("Tháng không hợp lệ");
}

else{
    switch(thang){
        case 2:
            alert("Tháng 2 có 28 ngày hoặc 29 ngày với năm nhuận");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert("Tháng" + thang + "Có 30 ngày");
            break;
        default:
            alert("Tháng"+thang+"Có 31 ngày");
            break;
    }
}