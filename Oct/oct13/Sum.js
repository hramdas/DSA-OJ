function sumAbs(n, arr){

    if(0 >= n){
        return 0
    } else
        // return Math.abs(arr[i] - arr[i+1]) + sumAbs(n, i=1, arr)
        return Math.abs(arr[n]-arr[n-1]) + sumAbs(n-1, arr)
    
}

function runProgram(input) {
    input = input.trim().split('\n')
    cases = +input[0].trim()

    line=1;
    for(var i=0; i<cases; i++){
        n = +input[line++].trim()
        arr = input[line++].trim().split(' ').map(Number)
        
        //sum = 0
        //console.log(n, arr)
        //sumAbs(size-1, 0, arr, sum)
        console.log(sumAbs(n-1, arr))
    }
   
}
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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
  