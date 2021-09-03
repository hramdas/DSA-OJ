function runProgram(input) {
  input = input.trim().split("\n")
  var N = input[0]

  arr = [];
  for (var i = 1; i <= N; i++){
   arr.push(input[i].trim().split(" "))
  }

  for (var i = 0; i <arr.length; i++) {
    line = arr[i]
    out = []
    for (var j = 0; j < line.length; j++) {
      word = line[j]
      wOut = []
      for (var k = word.length-1; k >=0; k--){
        wOut.push(word[k])
      }
      out.push(wOut.join(""))
    }
    console.log(out.join(" "))
  } 
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    hi there
    hello  world
    a  b`);
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
  