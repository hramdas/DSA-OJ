function numberofWays(n){
  //console.log('n: ', n)
  if(n < 0) return 0
  if(n == 0) return 1
  
  else return numberofWays(n-1) + numberofWays(n-2) + numberofWays(n-3)
}

function runProgram(input) {
    n = +input.trim()
    console.log(numberofWays(n))
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4`);
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
  