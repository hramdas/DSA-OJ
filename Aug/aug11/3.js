function runProgram(input) {
    num = Number(input.trim())
   

    res = 0;
    out = 0;
    count = 0;
    for (var i = 1; i < num; i++) {
        if (res >= num){
            break
        } else if ((res + out + i) <= num) {
            out += i
            res +=out  
            count++
        } 
       
    }
    console.log(count)
        // console.log(res)
        // console.log(out)
        
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4115`);
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
  