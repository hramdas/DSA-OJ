function runProgram(input) {
    input = input.trim().split("\n")
    test = Number(input[0])

    var line = 1;
    for (var i = 0; i <test; i++){
        size = +input[line];
        line++

        mat= []
        for (var j = 0; j < size; j++){
            mat.push(input[line++].trim().split(" ").map(Number))
        }
        
        out = []
        for (var r = size - 1; r >= 0; r--){
            for (var c=0; c < size; c++){
                if (c==0){
                    out.push(mat[r][c])
                }
            }
        }

        for (var r= 1; r < size-1; r++){
            for (var c=0; c < size; c++){
                if (size>1 && r==c)
                out.push(mat[r][c])
            }
        }
        for (var r = size - 1; r >= 0; r--){
            for (var c=0; c < size; c++){
                if (size>1 && c==size-1){
                    out.push(mat[r][c])
                }
            }
        } 
       console.log(out.join(" "))
    } 
    
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`8
2
6 4
3 5
2
7 3
9 7
3
8 4 2
1 2 5
8 6 1
1
5 `);
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
  