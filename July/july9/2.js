function runProgram(input) {
    var input = input.trim().split('\n')
    var N = Number(input[0])
    var num = input[1].trim().split(' ').map(Number)

    isPresent = false
    for(i=0; i<num.length;i++)
      if (num[i] == 42){
        isPresent = true
        break
    } 

    if (isPresent == true){
        console.log("Yes")
    } else {
        console.log("No")
    }
}
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`5
      1 7 3 42 8`);   // INPUT
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