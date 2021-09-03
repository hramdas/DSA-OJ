
function runProgram(input) {
    input = input.trim().split('\n'); 
    int = input[1].trim().split(' ').map(Number)
    N = Number(input[0].trim())

    count=0
    for (var i = 0; i < N; i++) {
        for (var j = i; j < N; j++) {
            out = 0
            for (var k = i; k <= j; k++) {
                out+=int[k] 
            }
            if (out%2==0){
                count++;
            }
        }
    }  console.log(count)
     
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    2 5 4 4 4`);
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
  