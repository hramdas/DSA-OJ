

function geoSeries(n, r){
    //return Math.pow(r, n)
    if(n == 0) return 1
    return (1/Math.pow(r, n)) + geoSeries(n-1, r)
}


function runProgram(input) {
    input = input.trim().split(' ')
    n = +input[0].trim()
    r = +input[1].trim()

    ans = geoSeries(n, r)
    console.log(ans.toFixed(4))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1 1`);
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
  