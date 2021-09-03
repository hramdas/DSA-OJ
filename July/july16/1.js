function runProgram(input) {
    var input = input.trim().split("\n")
    line1= input[0].split(" ").map(Number)
    num = input[1].trim().split(" ").map(Number)
    var N = line1[0]
    var L = line1[1]

    count = 0
    for (var i=0; i<N; i++){
        for (var j=i+1; j<=N; j++){  
            if (num[i] + num[j] == L){
             count++ 
             console.log(num[i], num[j])
            }
        } 
    }  console.log(count)
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2 4
    2 2`);
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
  