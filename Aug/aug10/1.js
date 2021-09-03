function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())
   
    mat= [];
    for(var i=1; i<=N; i++){
        mat.push(input[i].trim().split(" "))
    }
    
  

   
   // console.log(mat[1][0])

     left = 0;
    right = N-1;
    top = 0;
    bottom = N-1;
   out = [];

  for (var a=0; a<Math.ceil(N/2); a++) {
        
    for (var j=left; j<=right; j++) {
        out.push(mat[top][j])  
    }
    top++

    for (var j=top; j<=bottom; j++) {
        out.push(mat[j][right])  
    }
    right--

    for (var j=right; j>=left; j--){
        out.push(mat[bottom][j])  
    }
    bottom--

    for (var j=bottom; j>=top; j--) {
        out.push(mat[j][left])   
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
  