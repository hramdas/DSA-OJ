function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim());
    str = input[1].trim()

    obj = {}
    for (var i = 0; i <N; i++) {
        obj[str[i]] = obj[str[i]] ? obj[str[i]]+=1 : obj[str[i]] = 1;
    }
   console.log(obj)

   obj1 = {}
   for (var i = 0; i <N; i++) {
       if (obj1[str[i]] = obj1[str[i]]){
           obj1[str[i]]+=1
       } else {
           obj1[str[i]] = 1
       }
   }  console.log(obj1)

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    aman
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
  