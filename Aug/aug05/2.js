function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())
    arr = input[1].trim().split(' ').map(Number);

    out = []
    for (var i = 0; i < N; i++) {
        sum = 0;
        for (var j = 0; j < N; j++) {
            if (i!==j){
                sum += arr[j]
            }
        }  if (sum%7 == 0){
                 out.push(i);
             }
    }
    //console.log(out.length)

    output = {}
    res = arr[out[0]]
    for (var i = 0; i < out.length; i++) {
        if (res > arr[out[i]]){
           res = arr[out[i]]
        }
    } //console.log(res)
   
    for (var i = 0; i < N; i++){
      if (out.length == 0){
        console.log("-1")
        break
      } else if (res == arr[out[i]]){
        //console.log(arr[out[i]])
        console.log(out[i])
      }
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`10
    0 1 1 0 0 0 0 0 1 1`);
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
  