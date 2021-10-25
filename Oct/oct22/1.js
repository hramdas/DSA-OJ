    
function subSet(n){
    return Math.log(n)
}

function runProgram(input) {
    // input = input.trim().split('')
    n = +input.trim()
    console.log(subSet(n))
   
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
  