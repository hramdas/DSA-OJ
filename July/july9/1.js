function runProgram(input) {
var input = input.trim().split(' ')
// console.log(input)
var l = Number(input [0])
var r = Number(input [1])

for (i=l; i<=r; i=i*2)
    // if (l<=i && i<=r)
    console.log(i) 
}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`4 10`);   // INPUT
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