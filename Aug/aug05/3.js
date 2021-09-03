function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())
   // console.log(input , N)

    for (var i = 1; i < N; i++){
      int = input[i].trim().split("")
      sum = 0;
      
      for (var j = 0; j < int.length; j++) {
          sum+= int[j]**2
      }
      if (sum==1){
        console.log(true)
      } else {
        num = sum
      }
      
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    19
    2
    312082396
    `);
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
  