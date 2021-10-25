function len(str, i){
    if(str[0] == undefined) return 0
    if(str[i] == undefined) return i
    else return len(str, i+1)

}

function runProgram(input) {
    str = input.trim()
    sum = 0
   console.log(len(str, 0))

  // console.log(str[11])
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`masaischool`);
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
  