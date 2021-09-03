function runProgram(input) {
    input = input.trim(); 
    N = input.length;

    count = 0
    for (var i = 0; i < N; i++){
        for (var j = 0; j <N; j++) {
            if (i!==j && input[i] == input[j]) {
              count++
            }
        }
    } 
    if (count == 0) {
        console.log("Unique")
    } else {console.log("No")}
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`masi`);
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
  