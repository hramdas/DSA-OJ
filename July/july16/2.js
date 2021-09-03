function runProgram(input) {
    var input= input.trim().split("\n")
    var N = Number(input[0])
    line1 = input[1].trim().split(" ").map(Number)
    line2 = input[2].trim().split(" ").map(Number)

    for (i=0; i<N; i++)
        for (j=0; j<N; j++)
        if(line1[i] == line2[j]){
            console.log(line1[i])
    }   
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    4 5 7
    9 2 5`);
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
  