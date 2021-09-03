function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())
   
    line = 1;
    for (var i = 0; i < N; i++){
        size = Number(input[line++].trim())

        mat =[]
        for (var j = 0; j <size; j++){
        mat.push(input[line++].trim().split(" "))
        }
        
        flr = Math.floor(size/2)
        ceil = Math.ceil(size/2)
        ind = size-1
        out = []

        for (let r=flr; r>=0; r--) {
          out.push(mat[r][ind--])
        }
        for (let r =1; r<=flr; r++) {
          out.push(mat[r][ind--])
        }
        ind = 1;
        for (let r=flr+1; r<size; r++){
          out.push(mat[r][ind++])
        }
        for (var r =size-2; r>flr; r--){
          out.push(mat[r][ind++])
        }

        console.log(out.join(" "))
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    5
    10 4 3 7 4
    3 4 6 2 7
    5 2 3 9 1
    9 6 6 8 8
    11 8 7 1 8`);
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
  