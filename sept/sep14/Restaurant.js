function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())

    var price = [];
    var res = []

    for (var i = 1; i <= n; i++){
        query = input[i].trim().split(' ').map(Number)
        // console.log(query)
        
        if(query[0] == 1){
            if(price.length==0){
                res.push('No Food')
            } else {res.push(price[price.length-1])
                price.pop()
            }
        } else price.push(query[1])
    }
   console.log(res.join('\n'))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1`);
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
  