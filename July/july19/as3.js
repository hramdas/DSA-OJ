function runProgram(input) {
    input = input.trim().split("\n")

   

    var marks = []
    for(var i = 0; i < input.length;i++) {
        var mark = input[i].trim().split(" ");
        // [Name, sub1, sub2, sub3] = mark
        marks[i] = mark
    } console.log(marks)

//   function average(marks){
//       avg = 0
//     for(var i = 0; i < marks.length; i++)
//     for(var j = 0; j < mark[i].length; j++){
//         avg += marks[i][j]
//     } console.log(avg)
//   } average(marks)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`Nrupul 30 40 50
    Prateek 20 10 10
    Yogesh 40 20 20
    Aman 10 20 40
    Albert 25 15 25`);
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
  
