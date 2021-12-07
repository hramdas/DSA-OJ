function runProgram(input) {
    input = input.trim().split('\n').map(Number)
    var n = input.length;
    console.log(input, n)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`12
    2`);
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
  