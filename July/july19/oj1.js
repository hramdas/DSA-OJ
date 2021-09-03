function runProgram(input) {
    input = input.trim();

    count = 0
    for (var i = 0; i <input.length; i++)
    if(input[i] == "L"){
        count -= 1;
    } else if(input[i] == "R"){
        count += 1;
    } out1 = count

    count1 = 0
    for (var i = 0; i <input.length; i++){
    if(input[i] == "D"){
        count1-= 1;
    } else if(input[i] == "U"){
        count1 += 1;
    } }
    console.log(count, count1)
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`LLRDDR`);
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
  