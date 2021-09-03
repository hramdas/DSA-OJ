function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())

    line =1;
    for (var i=1; i<=N; i++) {
        size = Number(input[line++].trim())
        arr = input[line++].trim().split(" ").map(Number)
        //console.log(arr, size)

        sum = 0;
        for (var j=1; j<=size;j++){
            sum += arr[j-1]*j
        }
        console.log(sum)
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1`);
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
  