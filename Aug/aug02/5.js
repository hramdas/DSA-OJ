function runProgram(input) {
    input = input.trim().split('\n');
    N = Number(input[0]);
    pass = input[1].trim().split(' ').map(Number)
    bag = input[2].trim().split(' ').map(Number)
    //console.log(input,pass, bag)

    for (var i = 0; i < N; i++) {
        if (pass[i]<=15 && bag[i]<=7){
            console.log("Boarding")
        } else {console.log("Stop")}
    }
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    12 14 15 6
    8 5 7 4`);
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
  