function runProgram(input) {
 var runs = input.split(' ').map(Number);

 var high = runs[0];
 var sachin = runs[1];
 if (sachin>high){
     console.log('Broken')
 } else if ( sachin < high) {
     console.log('Not Yet')
 } else {
     console.log('Wao')
 }
}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`264 200`);   // INPUT
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