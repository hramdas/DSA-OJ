function runProgram(input) {
    var input = input.trim().split('\n')
    
    var NZ = input[0].split(" ").map(Number)
    var EN = input[1].trim().split(" ").map(Number)

    for (i=0;i<3; i++)
    if (NZ[i] > EN[i]){
        console.log("New Zealand")
        break
    } else if (NZ[i] < EN[i]){
        console.log("England")
        break
  }
}
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`241 15 27
      242 14 26`);   // INPUT
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