function runProgram(input) {
    input = input.trim()
    N = input.length
   // console.log(input, N)

    out = []
   for (var i = N-1; i >= 0; i--){
        out.push(input[i])
       } //console.log(out.join(""))

    if (out.join("")==input){
        console.log("Yes")
    } else {
        console.log("No")
    }

    
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1221`);
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
  