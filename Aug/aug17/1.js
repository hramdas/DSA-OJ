function runProgram(input) {
    input = input.trim().split('\n'); 
   
    cases = input[0].trim().split(" ")
    m = Number(cases[0]);
    n = Number(cases[1]);

    mat = [];
    for (var i = 1; i <=m; i++){
        mat.push(input[i].trim().split(" ").map(Number));
    }
   
    sum1 = 0;

    for (var r=0; r<Math.floor(m/2); r++) {
        sum1+= mat[r][0]
    }
    for (var c=0; c<n;c++) {
        sum1+= mat[Math.floor(m/2)][c]
    }
    for (var r=Math.floor(m/2)+1; r<m; r++){
        sum1+= mat[r][n-1]
    }
    //console.log(sum1)

    sum2= 0;

    for (var r=0; r<=Math.floor(n/2); r++) {
        sum2+= mat[m-1][r]
        // console.log(mat[m-1][r])
    }
    // console.log(sum2)
    for (var r=1; r<m-1; r++) {
      sum2+= mat[r][Math.floor(n/2)] 
    }
    //console.log(sum2)
    for (var c=Math.floor(n/2); c<n; c++){
        sum2+= mat[0][c]
    }
    //console.log(sum2)
    // console.log(sum2)
    console.log(Math.abs(sum1-sum2))
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3 5
    1 2 3 4 5
    6 7 8 9 10
    11 12 13 14 15
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
  