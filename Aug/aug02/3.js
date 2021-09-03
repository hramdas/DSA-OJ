function runProgram(input) {
    input = input.trim().split("\n").map(Number)
    N = input[0]

    for (var i = 1; i <= N; i++) {
        for (var j = 1; j <= 31; j++) {
            //console.log((-2)**j) 
           var out = "False";
            if ( (-2)**j == input[i]) {
                out = "True"
                break
            } else if ( 2**j == input[i]){
                out = "True"
                break
            } ///else out = false
           
        }  console.log(out, input[i], j)     
    }
    
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`7
    -6155
    8
    8449
    524288
    -14965
    -128
    12524`);
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
  