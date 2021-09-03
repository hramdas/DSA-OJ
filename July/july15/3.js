function runProgram(input) {
    input = input.trim();
    N = input.length

    out = []
    for (var i = 0; i < N; i+=2){
        
        for (var j = 0; j < input[i+1]; j++){
            out.push(input[i])   
        } 
    } console.log(out.join(""))
    
    
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`a3b2`);
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
  