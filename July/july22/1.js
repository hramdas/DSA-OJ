function runProgram(input) {
    input = input.trim().split("\n");
    N = Number(input[0])

    mat = [];
    for (var i =1; i <= N; i++){
        mat.push(input[i].trim().split(" "))
    }
    //console.log(mat)

    for(var i= N-1; i >= 0; i--){
        out = []
        for(var j=0; j <N; j++){
            out.push(mat[j][i])
        }  console.log(out.join(" "))
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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
  