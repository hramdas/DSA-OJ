function runProgram(input) {
    input = input.trim().split("\n")
    N = Number(input[0].trim())

    out = []
    top = 0;
    right = N-1;
    bottom = N-1;
    left = 0;

    mat = []
    for (var i = 1; i <= N; i++) {
      mat.push(input[i].trim().split(" "))
    }

    out = []
    for (var i = 0; i < Math.ceil(N/2); i++) {
      
      for (j=left; j<=right; j++) {
        out.push(mat[top][j])
      } 
      top++
     
      for (j=top; j<=bottom; j++) {
        out.push(mat[j][right])
      }
      right--

      for (j = right; j>=left; j--) {
        out.push(mat[bottom][j])
      }
      
      bottom--
      for (j=bottom; j>=top; j--){
        out.push(mat[j][left])
        //console.log(mat[j][left])
      }
      left++
      

    } console.log(out.join(" "))
    
   
    
   
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
  