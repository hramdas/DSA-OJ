function runProgram(input) {
    input = input.trim().split('\n')
    cases = Number(input[0].trim())

    line = 1;
    for (var i=0; i<cases; i++) {
        test = input[line++].trim().split(" ").map(Number)
        n = test[0]
        k = test[1]
        arr = input[line++].trim().split(" ").map(Number)
        
        out = arr
        for (var j=1; j<=k; j++) {
           out.push(arr[n-1])
        }
        console.log(out)
    }
    
   
}

if (process.env.USERNAME === "hedga") {
    runProgram(`3
    3 1
    1 2 3
    2 2
    1 2
    2 3
    1 2`);
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
  