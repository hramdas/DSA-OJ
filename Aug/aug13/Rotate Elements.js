function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())

    mat = [];
    for (var i = 1; i <= n; i++){
        mat.push(input[i].trim().split(" "));
    }
    top = 0;
    left = 0;
    bottom = n-1;
    right = n-1;
    
    // 1 2 3 4
    // 1 2 3 4
    // 1 2 3 4
    // 1 2 3 4

    // 1 1 2 3
    // 1 2 2 4
    // 1 3 3 4
    // 2 3 4 4
    //console.log(mat)
    
    for (var j=0; j<Math.floor(n/2); j++) {
      pre = mat[top+1][left];
        for (k=left; k<=right; k++){
            temp = mat[top][k]
            mat[top][k] = pre
            pre = temp
      } top++
      for (k=top; k<=bottom; k++){
          temp = mat[k][right]
          mat[k][right] = pre
          pre = temp
      } right--
      for (k=right; k>=left; k--){
          temp = mat[bottom][k]
          mat[bottom][k] = pre
          pre = temp
      } bottom--
      for (k=bottom; k>=top; k--){
        temp = mat[k][left]
        mat[k][left] = pre
        pre = temp
      } left++  
         
    } 

    for (b=0; b<mat.length; b++) {
      console.log(mat[b].join(' '));
    }

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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
  