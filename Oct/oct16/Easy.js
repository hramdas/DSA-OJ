function arrSum(arr, n){
    if (n < 0) return 0
    else return arr[n] + arrSum(arr, n-1)
}

function runProgram(input) {
    input = input.trim().split('\n')
    cases = +input[0].trim()

    line = 1;
    for( let a = 0; a<cases; a++){
        n = +input[line++].trim()
        arr = input[line++].trim().split(' ').map(Number)
        //console.log(arr, n)
        console.log(arrSum(arr, n-1))
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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
  