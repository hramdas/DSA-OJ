function runProgram(input) {
    input = input.trim().split('\n'); 
    n = +input[0].trim()
    arr = input[1].trim().split(' ').map(Number)
    // console.log(n, arr)

    for(var i=1; i<n; i++){
        for(var j=i-1; j>=0; j--){

        }
    }
    
}
if (process.env.USERNAME === "shiva") {
    runProgram(`5
    5 4 1 3 2`);
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