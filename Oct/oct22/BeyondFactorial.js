function BeyondFactorial(n){
    if(n==1) return 0
    return Math.log(n) + BeyondFactorial(n-1)

}
function runProgram(input) {
    n = +input.trim()

    console.log(BeyondFactorial(n).toFixed(4))
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3`);
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
  