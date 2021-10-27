function runProgram(input) {
    input = input.trim().split('\n')
    cases = +input[0].trim()
    line = 1;
    for(var i=0; i<cases; i++){
        n = +input[line++].trim()
        arr = input[line++].trim().split(' ').map(Number)

        obj = {}

        for(num of arr){
          obj[num] = obj[num] ? obj[num] + 1 : 1
        }


        console.log(obj)
        
        Okey = Object.keys(obj)

        Oval = Object.values(obj)

        for(var k =0; k<Okey.length; k++){
            if(Oval[k] == 1){
                console.log(Okey[k])
            }
        }

    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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
  