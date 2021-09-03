function runProgram(input) {
    input = input.trim().split("\n")
    day = input[0]
    N = Number(input[1])
    //console.log(day, N)
    diff = N%7
    //console.log(diff)

   days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

   for (var i=0; i<7; i++) {
       if (day == days[i]) {
           if (i+diff < 7){
            console.log(days[i+diff])
           } else  console.log(days[(i+diff)%7])
       } 
   }

    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`Monday
    8`);
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
  