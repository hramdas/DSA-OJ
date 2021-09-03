function runProgram(input) {
    input = input.trim()

    for(let i=0;i<subArr.length;i++){
      if (subArr[a] !== subArr[i]){
        break;
      }
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`ABBBBBBCA`);
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
  