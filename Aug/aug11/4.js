function runProgram(input) {
    N = input.trim()

    hr = N/60
    

    min = N%60

    if (Math.floor(hr) > 1){
    console.log(Math.floor(hr)+ "hrs", min+"mins")
    } else
        console.log(Math.floor(hr)+ "hr", min+"mins")

    
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`135`);
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
  