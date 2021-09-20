function runProgram(input) {
    var int = input.trim().split(' ').map(Number)
    var l = int.length;

    a1 = int[1]
    a2 = int[3]

    // for (var i = 0; i < l0000; i+=int[1]) {
    //     if (a1 == a2){
    //         console.log('YES')
    //     }
    //     a1+=int[i]
    // }

    if(a1> a2){
        console.log('YES')
    } else {
        console.log('NO')
    }

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`0 2 5 3`);
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
  