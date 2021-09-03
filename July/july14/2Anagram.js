// Partialy Accepted


function runProgram(input) {
    input = input.trim().split("\n")
    line1 = input[0].trim().split(" ")
    line2 = input[1].trim().split(" ")
    line2 = line2.join("")
    line1 = line1.join("")

    count = 0
  for(var i = 0; i < line1.length; i++) {
    for(var j = 0; j < line2.length; j++){
      if (line1[i]==line2[j]){
        count++
        break
      }
    }
  }  
    if (line1.length !== line2.length){
      console.log("False")
    } else if (count == line1.length){
    console.log("True")
  } else {"False"}
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`sachin tendulkar is sachin tendulkar
    si sachin hsacin tendulkar tedulkad`);
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
  