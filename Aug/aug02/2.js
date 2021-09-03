function runProgram(input) {
    input = input.trim().split('\n')
    N = Number(input[0].trim())
    // console.log(N)

    res = 0
    for (var i = 1; i <=N; i++) {
        x = Number(input[i])
        out = []
        if (x>=10) {
            res += x + Math.floor(x/10)
            out.push(Math.floor(x/10))
        }  
    } 

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`6
    1
    10
    19
    9876
    12345
    1000000000`);
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
  