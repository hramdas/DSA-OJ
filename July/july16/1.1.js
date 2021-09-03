function runProgram(input) {
    var input = input.trim().split("\n")
    line1= input[0].split(" ").map(Number)
    num = input[1].trim().split(" ").map(Number)
    var N = line1[0]
    var L = line1[1]

    count = 0
    out = []
    for (var i=0; i<N; i++){
        for (var j=i; j<N; j++){  
            s = 0;
            for (var k=i; k<=j; k++){
                s = s + num[k] 
                out.push(num[k])
            }
            if (s == L)
            count++
        } 
    }  console.log(out)
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`8 11
    2 4 1 5 6 9 4 8`);
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