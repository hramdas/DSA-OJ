function runProgram(input) {
    input = input.trim().split("\n")
    N = input.length;

    mat = [];
    for (var i = 0; i < N; i++) {
        mat.push(input[i].trim().split(" "))
    } //console.log(mat)

        countx = 0;
        counto= 0;
    for (var i = 0; i<N; i++) {
        
        for (var j = 0; j <N; j++) {
            if (mat[i][j] == "x"){
                countx++
            } else counto ++
        } 
    } if (countx == 5){
        console.log("x")
    } else if (counto == 5){
        console.log("o")
    }

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`x o x
    o x x
    o o o`);
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
  