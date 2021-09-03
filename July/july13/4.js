function runProgram(input) {
    var input = input.trim();

    var conso = 'bcdfghjklmnpqrstvwxyz'

    count = 0
    for (var i = 0; i <input.length; i++)
    for(var j=0; j <conso.length; j++) {
        if (input[i] == conso[j]){
        count++ }
    } console.log(count)

    
    // var vovels = 'aeiou'
    // count1 = 0
    // for (var i = 0; i <input.length; i++)
    // for(var j=0; j <vovels.length; j++) {
    //     if (input[i] == vovels[j]){
    //       break;
    //     } else count1++;
    // } console.log(count1)
    

   
  }
  if (process.env.USERNAME === "hedga") {
    runProgram(`masaischool`);
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
  
  