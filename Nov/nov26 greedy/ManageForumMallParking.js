function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var arv = input[1].trim().split(' ').map(Number)
    var dep = input[2].trim().split(' ').map(Number)

    var car = 0
    // var sum = 0;
    for(let i=0; i<arv.length; i++){
        if(car > n){
            console.log('Not Possible');
            return;
        }
       if(arv[i] < dep[i]){
           car++
       }

       if(dep[i] <= arv[i+1]){
           car--
       }
    }

    if(car>n){
        console.log('Not Possible');
        return
    }
    console.log('Possible')
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    1 2 3 5 4
    6 6 6 6 5`);
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
  