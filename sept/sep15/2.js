function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())
    
    var q = [];
    var s = [];

    for(let i=1; i<=n;i++){
    var line = input[i].trim().split(' ').map(Number)
    // console.log(line)

    if(line[0] == 1){
        q.push(line[1])
    } else if (line[0] == 2){
        s.push(line[1])
    } else if(line[0] == 3){
        if(q.length == 0){
            console.log(-1)
        } else console.log(q[0])
    } else if(line[0] == 4){
        if(s.length == 0){
            console.log(-1)
        } else console.log(s[s.length-1])
        
    } else if(line[0] == 5){
        a = q.shift()
        s.push(a)
        
        // console.log(s)
    }
    }
    
}
if (process.env.USERNAME === "shiva") {
    runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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