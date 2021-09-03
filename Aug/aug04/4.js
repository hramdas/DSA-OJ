function runProgram(input) {
    input = input.trim().split("\n")
    test = Number(input[0].trim());

    line = 1;
    for (var i=0; i<test; i++) {
        N = Number(input[line++].trim());
        arr = input[line++].trim().split("");

        
        for (var j=0; j<N; j++) {
            
            for (var k=j; k<N; k++){
                out = []
                for (var l=j; l<=k; l++) {
                    out.push(arr[l]);
                } console.log(out.join(""))
            } 
        } 
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    4 
    aman`);
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
  