function runProgram(input) {
    input = input.trim().split("\n");
    var [row, col] = input[0].trim().split(" ")
   // console.log(row, col)

    mat= []
    for (var i=1; i<input.length; i++){
        mat.push(input[i].trim().split(" "))
    }
    
    
    for (var i=0; i<col; i++){
        out = []
        for (var j=0; j<row; j++){
            out.push(mat[j][i])
        } console.log(out.join(" "))
    } 

    newArr = []
    for (var i=0; i<col; i++){
        out = []
        for (var j=0; j<row; j++){
            out.push(mat[j][i])
        } console.log(out.join(" "))
    } 
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
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
  