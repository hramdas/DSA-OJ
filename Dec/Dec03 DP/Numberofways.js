function countWays(n)
{
    var DP = [];
    // Base cases
    DP[0] = DP[1] = DP[2] = 1;
    DP[3] = 2;
 
    // Iterate for all values from 4 to n
    for(var i = 4; i <= n; i++)
        DP[i] = DP[i - 1] + DP[i - 3] +
                DP[i - 4];
    return DP[n];
}

function runProgram(input) {
    n = +input.trim()
    count = 0;
    console.log(countWays(n))
    // console.log(count)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5`);
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
  