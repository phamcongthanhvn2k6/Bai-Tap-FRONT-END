let a=prompt("Nhập tên Đăng Nhập:");

if(a=="ADMIN"){
    let b=prompt("Nhập Mật Khẩu:");
    
    if(b=="TheMaster"){
        alert("Welcome");
    }

    else if(b=="null"){
        alert("Cancelled");
    }

    else{
        alert("Wrong password.");
    }
}

else if(a=="null"){
    alert("Cancelled");
}

else{
    alert("I Don’t know you");
}