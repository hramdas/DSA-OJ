function runProgram(input) {
    input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    var m = cases[0]
    var n = cases[1]
    var arr = input[0].trim().split(' ').map(Number)

    console.log(count(arr,m,n))
}
function count(arr, m, n){

    var dp = Array(m+1).fill(0);

    dp[0]= 1;

    for(let i=0; i<n; i++){
        
    }

    if(m == 0) return 1;
    if(m < 0) return 0;
    if(n <=0 && m >=1) return 0

    return count(arr, m, n-1) + count(arr, m-arr[n-1], n)
}

if (process.env.USERNAME === "hedga") {
    runProgram(`4 3
    1 2 3`);
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
  