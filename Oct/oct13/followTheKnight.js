function followKnight(i, j, n){

  if(i<0 || i>9 || j<0 || j>9) return;

  if(n == 0){
    board[i][j] = 1
    return;
  }

  followKnight(i-2, j-1, n-1)
  followKnight(i-2, j+1, n-1)
  followKnight(i+2, j-1, n-1)
  followKnight(i+2, j+1, n-1)
  
  followKnight(i-1, j-2, n-1)
  followKnight(i+1, j-2, n-1)
  followKnight(i+1, j+2, n-1)
  followKnight(i-1, j+2, n-1)
  
}

function runProgram(input) {
    input = input.trim().split(' ')
    n = +input[2].trim()
    i = +input[0].trim()
    j = +input[1].trim()

    board = []
    for(let a =0; a< 10; a++){
      col = []
      for(let b=0; b<10; b++){
        col.push(0)
      }
      board.push(col)
    }

    followKnight(i-1, j-1, n)

    count = 0
    for(let a =0; a< 10; a++){
      for(let b=0; b<10; b++){
        if(board[a][b] == 1){
          count++
        }
      }
    }
    //console.log(board)
    console.log(count)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4 7 6`);
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
  