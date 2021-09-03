function runProgram(input) {
    input = input.trim().split("\n")
    N = input[0]

    for (var i =1; i <= N; i++) {
        arr = input[i].trim().split(" ")
        diff = arr[1]-arr[0]
        if (diff%2 == 1){
          console.log(Math.floor(diff/2) + 1)
        } else console.log(diff/2)
    }  
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    5 10
    6 10`);
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
  