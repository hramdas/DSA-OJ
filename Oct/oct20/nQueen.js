function runProgram(input) {
    
    var n = +input.trim()

    var board = []
    for(let i=0; i<n;i++){
        var Row = []
        for(let j=0; j<n; j++){
            Row.push(0)
        }
        board.push(Row)
    }
    board[0][0] = 2
   console.log(board)

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4`);
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
  