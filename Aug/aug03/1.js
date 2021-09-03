function runProgram(input) {
    input = input.trim().split("\n")
    test = Number(input[0].trim())

    line=1
    for (var i=0; i<test; i++){
        N = Number(input[line++].trim());
        int = input[line++].trim().split(" ")
        //console.log(int)
        out = []
        for (var j=0; j<N; j++){
            out.push(int[j].split(""))
        } out = out.join(",")
         out = out.split(",").map(Number)
        //console.log(out)
        res = 0
        for (k=0; k<out.length; k++){
            res+=out[k]
        }
        console.log(res)
    } 
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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
  