function runProgram(input) {
    input = input.trim().split('\n')
    var testcases = +input[0].trim()
    var line=1;
    for(let i=0; i<testcases; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)
        
        console.log(MaxProfit(arr, 0, n-1))
    }
}

  function MaxProfit(arr, l, h){
      var cur = l;
      

  }
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    6
    7 1 5 3 6 4
    4
    4 3 2 1
    `);
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
  