function runProgram(input) {
    input = input.trim().split("\n");
    N = Number(input[0]);


    for (var i =1; i<=N; i++) {
        //console.log(input[i].trim())
        if (input[i].trim() == "India")
        console.log(i)
    }
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    Russia
    USA
    Japan
    China
    India`);
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
  