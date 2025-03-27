let arr =[];

function menu(){
    return Number(prompt("Menu:\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n" +
        "4. Tính tổng các phần tử trong mảng\n" +
        "5. Tìm số lần xuất hiện của một phần tử trong mảng\n" +
        "6. Sắp xếp mảng tăng dần\n" +
        "7. Thoát chương trình\n" +
        "Vui lòng chọn một chức năng (1-7):"
    ));
}

function nhapMang(){
    let n = parseInt(prompt("Nhập số phần tử của mảng:"));
    if (isNaN(n) || n <= 0) {
        alert("Vui lòng nhập một số nguyên dương!");
        return;
    }
    arr = []; 
    for (let i = 0; i < n; i++) {
        let value = parseInt(prompt("Nhập phần tử thứ " + (i+1)+" :"));
        if (isNaN(value)) {
            alert("Vui lòng nhập số hợp lệ!");
            i--;
        } else {
            arr[i] = value;
        }
    }
}


function hienThiMang(){
    if(arr.length===0){
        alert("Mảng rỗng!");
    }else{
        alert("Mảng: "+arr.join(", "));
    }
}

function timMaxMin(){
    if(arr.length===0){
        alert("Mảng rỗng!");
    }else{
        let max=arr[0];
        let min=arr[0];
        for(let i=1;i<arr.length;i++){
            if(arr[i]>max){
                max=arr[i];
            }
            if(arr[i]<min){
                min=arr[i];
            }
        }
        alert("Phần tử lớn nhất trong mảng: "+max+"\nPhần tử nhỏ nhất trong mảng: "+min);
    }
}

function tinhTong(){
    let tong=0;
    for(let i=0;i<arr.length;i++){
        tong+=arr[i];
    }
    alert("Tổng các phần tử trong mảng: "+tong);
}

function timSoLanXuatHien(){
    if(arr.length===0){
        alert("Mảng rỗng!");
    }else{
        let x=parseInt(prompt("Nhập phần tử cần tìm:"));
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]===x){
                count++;
            }
        }
        alert("Số lần xuất hiện của phần tử "+x+" trong mảng: "+count);
    }
}

function sapXepTangDan(){
    if(arr.length===0){
        alert("Mảng rỗng!");
    }else{
        arr.sort(function(a,b){
            return a-b;
        });
        alert("Mảng sau khi sắp xếp tăng dần: "+arr.join(", "));
    }
}

function main(){
    while(true){
        let chon=menu();
        switch(chon){
            case 1:
                nhapMang();
                break;
            case 2:
                hienThiMang();
                break;
            case 3:
                timMaxMin();
                break;
            case 4:
                tinhTong();
                break;
            case 5:
                timSoLanXuatHien();
                break;
            case 6:
                sapXepTangDan();
                break;
            case 7:
                alert("Thoát chương trình!");
                return;
            default:
                alert("Vui lòng chọn chức năng từ 1-7!");
        }
    }
}

main();