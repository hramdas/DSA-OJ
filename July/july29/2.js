function runProgram(input) {
  input = input.trim().split("\n")
  line = input[0].trim().split(" ").map(Number)
  l = line[0]
  r = line[1]
  c = line[2]
  //console.log(l, r, c)
  arr = input[1].trim().split(" ");
      //console.log(arr)    
      
  for (var i = 0; i <arr.length; i+=c) {
      out = []
      for (var j = i; j < i+c; j++){
          out.push(arr[j])
      }
      console.log(out.join(" "))
  }

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4 5 2
    6 3 4 3 6 5 5 2 2 9 3 2 6 3 1 4 4 1 8 8 5 4 3 1 3 2 7 6 6 6 1 4 2 5 3 6 6 9 5 5 `);
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
  