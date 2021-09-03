function runProgram(input) {
    num = input.trim().split(' ').map(Number)

    // console.log(num)
    sum = 0;
    h = 0;

    // for (l=0; l<num.length; l++) {
    //   while (sum < 0 && h < num.length){
    //     sum += num[h];
    //     h++
    //   } if (sum == 0){
    //     console.log(l, h-1)
    //   } sum-= num[l]

    // }


    for (var i = 0; i < num.length; i++){
      sum = 0
      for (var j = i; j < num.length; j++){
        sum+= num[j]
        if (sum == 0){
          console.log(i, j)
        }
        // console.log(sum)
      }
    }
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`6 3 -1 -3 4 -2 2 4 6`);
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
  