function runProgram(input) {
    input = input.trim().split("\n")
    var test = Number(input[0])
    
    var line = 1
    for (var a =0; a < test; a++){
    size = input[line].trim()
     
    line++
    arr = input[line].trim().split(" ")
    // line++
    //console.log(arr)
    
      
      for (var i = 0; i < size; i++){
        for (var j = 0; j< size; j++){
          out = []
          for (var k=i; k<=j; k++){
            out.push(Number(arr[k]))
            console.log(out)
          }
          
        }
      }
    line++
    } 
    

} 

if (process.env.USERNAME === "hedga") {
    runProgram(`2
    2
    1 1
    6
    1 2 1 2 3 1
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