function FSum(num){
    if(num.length === 1) return num

    else {
        num = num.split('')
        sum = 0
        for(let j=0; j<num.length; j++){
            sum+= +num[j]
        }
        
        return  FSum(String(sum))
    }
}


function runProgram(input) {
    input = input.trim().split(' ')
    str = input[0].trim()
    n  = +input[1].trim()

    sum = 0
    for(var i=0; i<str.length; i++){
        sum+= +str[i]
    }
    
    console.log(FSum(String(sum*n)))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`593 10`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
}
  