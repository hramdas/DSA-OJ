function runProgram(input) {
    input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    var arr = input[1].trim().split(' ').map(Number)

    k = cases[0]
    n = cases[1]

    console.log(cases, arr)

   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3 3
    1 2 3`);
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
  