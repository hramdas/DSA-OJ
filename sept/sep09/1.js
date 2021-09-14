function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())
    case1 = input

    arr = [];
    console.log(input, n);

    console.log()
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`);
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
  