let a = "javascript" + 5; // "javascript5" - Phép cộng chuỗi, số 5 được chuyển thành chuỗi và nối vào "javascript".  
let b = "javascript" - 1; // NaN - Phép trừ không thể thực hiện trên chuỗi "javascript".  JavaScript cố gắng chuyển "javascript" thành một số, nhưng nó không thành công, dẫn đến NaN (Not a Number).  
let c = "3" + 2; // "32" - Phép cộng chuỗi. Số 2 được chuyển thành chuỗi và nối vào chuỗi "3".  
let d = "5" - 4; // 1 - Phép trừ. Chuỗi "5" được chuyển thành số 5, và sau đó phép trừ được thực hiện.  
let e = isNaN("123"); // false - isNaN kiểm tra xem một giá trị có phải là NaN sau khi chuyển đổi thành số hay không. "123" có thể chuyển đổi thành số 123, nên kết quả là false.  
let f = isNaN("hello"); // true - "hello" không thể chuyển đổi thành một số hợp lệ, nên isNaN trả về true.  
let g = Number.isNaN("123"); // false - Number.isNaN chỉ trả về true nếu đối số là NaN *và* thuộc kiểu Number. "123" là một chuỗi, không phải NaN.  
let h = Number.isNaN(NaN); // true - NaN là một giá trị số đặc biệt đại diện cho "Not-a-Number", và Number.isNaN kiểm tra *chính xác* kiểu số NaN.  