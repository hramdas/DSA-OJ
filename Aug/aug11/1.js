function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())

    line = 1
    for (var i = 0; i < N; i++){
        size = Number(input[line++].trim())
        console.log(line)

        mat = [];
        for (var j = line; j <= size; j++){
            mat.push(input[j].trim().split(''))
        }
        console.log(mat)
       
        line+= size
        console.log(line)
        
    } console.log(line)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*`);
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
  