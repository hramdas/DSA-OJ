function coins(num){
   if(num <=5) {
       return num
    } else {val = (coins(num/2) + coins(num/3) + coins(num/4))
       return Math.max(val, num)
    }


}
function runProgram(input) {
    input = input.trim().split('\n').map(Number)
    var n = input.length;
    // console.log(n)

    for(let i=0; i<n; i++){
        console.log(coins(input[i]))
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`12 
    2 `);
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
  