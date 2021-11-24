function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim()
    let arr = []
    for(let i=1; i<=n; i++){
        arr.push(+input[i].trim())
    }
    
    let lhs = (a * b) + c;
    let rhs = (f+ e) * d;

    for(let j=0; j<n; j++){
        
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    5
    7
    10`);
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
  