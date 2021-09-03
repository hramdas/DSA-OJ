function runProgram(input) {
    var input = input.trim().split(" ")
    var N = input.length

    count = 0
    for (var i = 0; i < N; i++) {  
        for (var j = i; j < N; j++){
            out = []
            for (var k =i; k <= j; k++){
                out.push(input[k])    
            }
            out = out.join("")
            N1 = out.length
            //console.log(out)

            if (out[0] == out[N1-1])
            count++
        }   
    } 
    console.log(count)
    
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2 4 1 5 6 9 4 8`);
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
  