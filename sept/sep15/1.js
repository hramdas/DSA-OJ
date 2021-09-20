function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())
    
    var col = []
    for(let i=1; i<=n;i++){
    var line = input[i].trim().split(' ')
    // console.log(line)

    if(line[0] == 'E'){
        col.push(line[1])
        console.log(col.length)
    } else if (col.length ==0 && line[0] == 'D'){
        console.log(-1, 0)
    } else if(line[0] == 'D'){
        console.log(col.shift(), col.length)
        
    }
    }
    
}
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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

