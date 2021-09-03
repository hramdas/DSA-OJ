//SOLVED

function runProgram(input) {
    input = input.trim().split("\n");
    test = Number(input[0].trim());

    line =1;
    for (var i = 0; i <test; i++) {
      N = Number(input[line++].trim());
      int = input[line++].trim().split(" ") //.map(Number);

      for (var j = 0; j < N; j++) {
        if (int[j] %2 == 0) {
         out = true
          break
        } else out = false

      }
      if (out == true) {
        console.log("YES")  
      } else if (N%2==0){
        console.log("YES")
      } else console.log("NO")
    }

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    1
    91
    8
    73 95 79 35 35 9 61 71
    3
    21 65 21
    4
    83 31 82 72
    2
    52 81`);
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
  