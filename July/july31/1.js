function runProgram(input) {
    input = input.trim().split("\n");
    test = input[0];

    line=1
    for (var i=0; i<test; i++){
        size= Number(input[line++].trim())
        mat = []
        for (var j=0; j<size; j++){
            mat.push(input[line++].trim().split(" "))
        }
        out = []
        for (var r=size-1; r>=0; r--){
            for (var c=0; c<size; c++){
                if (c==0){
                    out.push(mat[r][c])
                }
            }
        }
        for (var r=0; r<size;r++){
            for (var c=1; c<size-1; c++){
                if (size>1 && r==0){
                    out.push(mat[r][c])
                }
            }
        }
        for (var r=0; r<size; r++){
            for (var c=0; c<size; c++){
                if (size>1 && c==size-1){
                    out.push(mat[r][c])
                }
            }
        }
        for (var r=0; r<size; r++){
            for (var c=size-2; c>0; c--){
                if (size>1 && r==size-1){
                    out.push(mat[r][c])
                }
            }
        } 
        console.log(out.join(" "))


    }
    

    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9`);
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
  