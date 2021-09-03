function runProgram(input) {
    //input = input.trim().split("\n").map(Number)
    N = input

    out = 0
    for (var i = 1; i <=N; i++){
        if (i%2 == 0){
            out += i
        }
        
    } console.log(out);
    
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`22`);
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
  