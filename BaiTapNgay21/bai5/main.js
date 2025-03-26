for (let i=1;i<100;i++){
    if(i%3===0 && i%5===0){
        console.log("Số "+i+":FizzBuzz");
    }
    else if(i%3===0){
        console.log("Số "+i+":Fizz");
    }
    else if(i%5===0){
        console.log("Số "+i+":Buzz");
    }
}