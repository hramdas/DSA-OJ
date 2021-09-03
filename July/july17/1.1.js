function runProgram(input) {
    input = input.trim(); 
    N = input.length;

    substr = 1
    for (var i = 0; i < N; i++) {
        for (var j = i; j<N; j++) {
            out = []
            for (var k = i; k<=j; k++) {
                out.push(input[k])
            } 
            len = out.length;
          	count=0
            for (var a = 0; a < Math.floor(len/2); a++) {
                if (out[a] == out[len - 1 - a]) {
                    count++
                }
             } 
          if (count == Math.floor(len/2)){
            if (substr<len){
              substr = len
            }
          }
            
        }  
    } console.log(substr)
 
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
  