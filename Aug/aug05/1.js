function runProgram(input) {
    input = input.trim(); 
    N = input.length;

    substr = 1;
    output = {}
    for (var i = 0; i < N; i++) {
        for (var j = i; j<N; j++) {
            out = []
            for (var k = i; k<=j; k++) {
                out.push(input[k])
            } 
            //console.log(out)
            len = out.length;
            
            for (var a = 0; a < Math.floor(len/2); a++) {
                if (out[a] !== out[len - 1 - a]) {
                    break;
                } else if (len > substr) {
                    substr = len
                    output = out
                } 
            }
        }  
    } console.log(substr)
    console.log(output)

    
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`thisracecarisgood`);
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
  