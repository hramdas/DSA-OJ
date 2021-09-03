function runProgram(input) {
    input = input.trim().split('\n'); 
    testcase = Number(input[0].trim())

    line= 1;
    for (var i=0; i<testcase; i++) {
      n = Number(input[line++].trim());
      mat = [];
      for (var j=0; j<n; j++) {
        mat.push(input[line++].trim().split(" "));
      }
      
      for (var a=0; a<Math.floor(n/2); a++){
        for (var b=a; b<n-a-1; b++){
          temp = mat[a][b];
          mat[a][b] = mat[n-b-1][a]
          mat[n-b-1][a] = mat[n-a-1][n-b-1]
          mat[n-a-1][n-b-1] = mat[b][n-a-1]
          mat[b][n-a-1] = temp
        }
      }
      console.log(mat)
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
  