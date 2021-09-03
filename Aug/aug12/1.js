function runProgram(input) {
    input = input.trim().split('\n'); 
    tests = Number(input[0].trim())

    line=1;
    for (var i=0; i<tests; i++){
        size = Number(input[line++].trim())
        mat = []
        for (var j=0; j<size; j++) {
            mat.push(input[line++].trim().split(" "))
        }
       
        output = []
        left = 0
        for (var c=0; c<size; c++) {
            out = []
            for (var r=size-1; r>=0; r--) {
                out.push(mat[r][c])
            }
            output.push(out.join(" "))
            
        }
        console.log(output.join("\n"))
            
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8
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
  