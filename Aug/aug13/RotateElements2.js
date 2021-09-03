function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())

    mat = [];
    for (var a=1; a<=n; a++) {
        mat.push(input[a].trim().split(' '))
    }

    top = 0;
    left = 0;
    right = n-1;
    bottom = n-1;

    for (var i=0; i<Math.floor(n/2); i++) {
        pre = mat[top+1][right]
        for (var j=right; j>=left; j--){
            temp = mat[top][j]
            mat[top][j] = pre
            pre = temp
        } top++
        for (var j=top; j<=bottom; j++){
          temp = mat[j][left]
          mat[j][left] = pre
          pre = temp
        } left++
      
        // for (var j = left; j<=right; j++) {
        //   temp = mat[bottom][j]
        //   mat[bottom][j] = pre
        //   pre = temp
        // } 
        bottom--
        for (var j = bottom; j>=top; j--){
          temp = mat[right][j]
          mat[right][j] = pre
          pre = temp
        } right--
    }
    
    for (b=0; b<mat.length; b++) {
      console.log(mat[b].join(' '));
    }

  
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16`);
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
  