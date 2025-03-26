const letters = '0123456789ABCDEF'; // Các ký tự tạo nên mã màu HEX

for (let j = 0; j < 10; j++) {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // Tạo mã màu từng ký tự một
    }
    console.log(`%cDòng ${j + 1}: Đây là màu ngẫu nhiên!`, `color: ${color}`);
}