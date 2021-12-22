function runProgram(input) {
    input = input.trim().split('\n')
    var testcases = +input[0].trim()
    var line=1
    for(let i=0; i<testcases; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)
        
        console.log(Robbery(arr, n))
    }
}
function Robbery(arr, n){
    if(n == 0) return 0;
    if(n== 1) return arr[0];
    if(n==2) return Math.max(arr[0], arr[1]);

    let dp = new Array(n)

    dp[0] = arr[0]
    dp[1] = Math.max(arr[0], arr[1])
    for(let i=2; i<n; i++){
        dp[i] = Math.max(arr[i] + dp[i-2], dp[i-1])
    }
    return dp[n-1]

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    2
    1 100
    3
    2 100 99
    4
    100 1 1 100`);
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
  